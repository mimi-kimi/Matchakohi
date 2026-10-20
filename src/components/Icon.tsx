import {
  Bean,
  CakeSlice,
  Cherry,
  CircleDot,
  Coffee,
  CookingPot,
  Disc3,
  Droplets,
  Filter,
  Flame,
  FlaskConical,
  Leaf,
  Milk,
  Scale,
  Snowflake,
  Sparkles,
  Sprout,
  Syringe,
  Thermometer,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '../data/types';

const icons: Record<IconName, LucideIcon> = {
  bean: Bean,
  leaf: Leaf,
  cup: Coffee,
  droplet: Droplets,
  filter: Filter,
  press: FlaskConical,
  syringe: Syringe,
  snow: Snowflake,
  kettle: CookingPot,
  whisk: Sparkles,
  bowl: CircleDot,
  milk: Milk,
  cake: CakeSlice,
  sparkle: Sparkles,
  thermometer: Thermometer,
  scale: Scale,
  cherry: Cherry,
  roast: Flame,
  mill: Disc3,
  farm: Sprout,
};

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const Component = icons[name] ?? Leaf;
  return <Component size={size} strokeWidth={1.5} aria-hidden="true" focusable="false" />;
}
