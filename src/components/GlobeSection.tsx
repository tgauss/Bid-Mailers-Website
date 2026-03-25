import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { motion } from 'motion/react';
import { Truck, Clock, MapPin } from 'lucide-react';

const CENTERS = [
  { lat: 34.0522, lng: -118.2437, name: 'Los Angeles, CA' },
  { lat: 41.8781, lng: -87.6298, name: 'Chicago, IL' },
  { lat: 40.7128, lng: -74.0060, name: 'New York, NY' },
  { lat: 32.7767, lng: -96.7970, name: 'Dallas, TX' }
];

// Predefined major US cities/regions to ensure mailers land on land in the US
const US_DESTINATIONS = [
  { lat: 47.6062, lng: -122.3321 }, // Seattle
  { lat: 45.5051, lng: -122.6750 }, // Portland
  { lat: 37.7749, lng: -122.4194 }, // SF
  { lat: 32.7157, lng: -117.1611 }, // San Diego
  { lat: 36.1699, lng: -115.1398 }, // Vegas
  { lat: 33.4484, lng: -112.0740 }, // Phoenix
  { lat: 39.7392, lng: -104.9903 }, // Denver
  { lat: 30.2672, lng: -97.7431 },  // Austin
  { lat: 29.7604, lng: -95.3698 },  // Houston
  { lat: 38.6270, lng: -90.1994 },  // St Louis
  { lat: 44.9778, lng: -93.2650 },  // Minneapolis
  { lat: 33.7490, lng: -84.3880 },  // Atlanta
  { lat: 28.5383, lng: -81.3792 },  // Orlando
  { lat: 35.2271, lng: -80.8431 },  // Charlotte
  { lat: 39.9526, lng: -75.1652 },  // Philly
  { lat: 42.3601, lng: -71.0589 },  // Boston
  { lat: 41.4993, lng: -81.6944 },  // Cleveland
  { lat: 36.1627, lng: -86.7816 },  // Nashville
  { lat: 39.7684, lng: -86.1581 },  // Indianapolis
  { lat: 42.3314, lng: -83.0458 },  // Detroit
];

const createEnvelopeTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return new THREE.Texture();

  // Draw envelope body with glow
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(59, 130, 246, 0.8)'; // Blue glow
  ctx.shadowBlur = 20;
  ctx.shadowOffsetY = 0;
  
  ctx.beginPath();
  ctx.roundRect(16, 32, 96, 64, 8);
  ctx.fill();
  
  // Draw flap lines
  ctx.shadowColor = 'transparent';
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';
  
  ctx.beginPath();
  ctx.moveTo(16, 32);
  ctx.lineTo(64, 64);
  ctx.lineTo(112, 32);
  ctx.stroke();

  // Draw a little stamp
  ctx.fillStyle = '#3b82f6';
  ctx.beginPath();
  ctx.roundRect(92, 40, 10, 14, 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

export const GlobeSection = () => {
  const globeEl = useRef<any>();
  const [arcs, setArcs] = useState<any[]>([]);
  const deliveriesRef = useRef<any[]>([]);
  const materialRef = useRef<THREE.SpriteMaterial | null>(null);

  useEffect(() => {
    if (!materialRef.current) {
      const texture = createEnvelopeTexture();
      materialRef.current = new THREE.SpriteMaterial({ 
        map: texture, 
        color: 0xffffff,
        transparent: true,
        depthWrite: false
      });
    }

    // Set initial POV to US
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 39.8, lng: -98.5, altitude: 1.2 }, 2000);
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().autoRotate = false; // Stop auto-rotation
      globeEl.current.controls().enableRotate = false; // Prevent user from rotating away from US
    }

    const spawnDelivery = () => {
      const start = CENTERS[Math.floor(Math.random() * CENTERS.length)];
      
      // Pick a random US destination and add slight jitter so they don't all land on the exact same pixel
      const baseEnd = US_DESTINATIONS[Math.floor(Math.random() * US_DESTINATIONS.length)];
      const end = {
        lat: baseEnd.lat + (Math.random() - 0.5) * 2,
        lng: baseEnd.lng + (Math.random() - 0.5) * 2
      };

      // Add arc
      const newArc = {
        startLat: start.lat,
        startLng: start.lng,
        endLat: end.lat,
        endLng: end.lng,
        color: ['rgba(59, 130, 246, 0.1)', 'rgba(16, 185, 129, 0.8)']
      };
      
      setArcs(prev => {
        const next = [...prev, newArc];
        if (next.length > 15) return next.slice(next.length - 15);
        return next;
      });

      // Add animated envelope sprite
      if (globeEl.current && materialRef.current) {
        const sprite = new THREE.Sprite(materialRef.current);
        const scene = globeEl.current.scene();
        scene.add(sprite);

        deliveriesRef.current.push({
          start,
          end,
          progress: 0,
          mesh: sprite
        });
      }
    };

    const spawnInterval = setInterval(spawnDelivery, 800);

    let animationFrame: number;
    const animate = () => {
      if (globeEl.current) {
        const activeDeliveries: any[] = [];
        deliveriesRef.current.forEach(d => {
          d.progress += 0.008; // Animation speed
          
          if (d.progress >= 1) {
            globeEl.current.scene().remove(d.mesh);
          } else {
            // Interpolate position
            const lat = d.start.lat + (d.end.lat - d.start.lat) * d.progress;
            const lng = d.start.lng + (d.end.lng - d.start.lng) * d.progress;
            // Parabolic altitude
            const alt = Math.sin(d.progress * Math.PI) * 0.15; 
            
            try {
              const coords = globeEl.current.getCoords(lat, lng, alt);
              d.mesh.position.set(coords.x, coords.y, coords.z);
              
              // Scale based on progress (starts small, grows at peak, shrinks at end)
              const scale = Math.sin(d.progress * Math.PI) * 6; 
              d.mesh.scale.set(scale, scale, 1);
              
              activeDeliveries.push(d);
            } catch (e) {
              // Ignore coordinate errors during unmount
            }
          }
        });
        deliveriesRef.current = activeDeliveries;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      clearInterval(spawnInterval);
      cancelAnimationFrame(animationFrame);
      // Cleanup meshes
      deliveriesRef.current.forEach(d => {
        if (globeEl.current) {
          try {
            globeEl.current.scene().remove(d.mesh);
          } catch (e) {}
        }
      });
    };
  }, []);

  const pointsData = CENTERS.map(c => ({
    lat: c.lat,
    lng: c.lng,
    size: 0.5,
    color: '#3b82f6',
    name: c.name
  }));

  return (
    <section 
      className="py-24 bg-slate-950 relative border-y border-white/5"
      style={{
        // Using radial gradients instead of blurred divs prevents hard edges and clipping issues
        backgroundImage: 'radial-gradient(circle at 0% 50%, rgba(37,99,235,0.08) 0%, transparent 50%), radial-gradient(circle at 100% 50%, rgba(16,185,129,0.08) 0%, transparent 50%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl relative z-20 pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Nationwide Fulfillment
            </div>
            
            <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6 tracking-tight leading-tight">
              National scale. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Local precision.
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Our network of automated distribution centers ensures your custom estimates reach homeowners reliably. You mark the homes, we measure the roofs, and we ship your custom branded bid weekly.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">4 Distribution Centers</h4>
                  <p className="text-slate-400 text-sm">Strategically located across the US to minimize transit times and maximize delivery speed.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Weekly Shipping</h4>
                  <p className="text-slate-400 text-sm">You mark the homes, we measure the roofs, and we ship your custom branded bid weekly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 text-purple-400 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Real-Time Tracking</h4>
                  <p className="text-slate-400 text-sm">You know exactly when users call you or scan the QR code on your custom 5-page bid mailer.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center z-0"
          >
            {/* Subtle ring behind globe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full pointer-events-none"></div>
            
            <Globe
              ref={globeEl}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundColor="rgba(0,0,0,0)"
              
              // Distribution Centers
              pointsData={pointsData}
              pointColor="color"
              pointAltitude={0.01}
              pointRadius="size"
              pointsMerge={true}
              
              // Delivery Arcs
              arcsData={arcs}
              arcColor="color"
              arcDashLength={0.4}
              arcDashGap={0.2}
              arcDashAnimateTime={1500}
              arcAltitudeAutoScale={0.15}
              arcsTransitionDuration={0}
              
              // Atmosphere
              atmosphereColor="#3b82f6"
              atmosphereAltitude={0.15}
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
