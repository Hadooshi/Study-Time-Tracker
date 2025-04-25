
/**
 * تنظیمات Capacitor برای تبدیل وب‌سایت به اپ اندرویدی.
 * اطلاعات بیشتر: https://capacitorjs.com/docs/config
 */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.2d104db5232a457083b5521aaed99836',
  appName: 'learn-limit-monitor',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://2d104db5-232a-4570-83b5-521aaed99836.lovableproject.com?forceHideBadge=true',
    cleartext: true,
  },
};

export default config;
