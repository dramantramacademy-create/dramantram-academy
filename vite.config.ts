import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Define your routes here for the sitemap
    const routes = [
        '/',
        '/about',
        '/programs',
        '/admissions',
        '/career-support'
    ];

    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // Generates sitemap.xml in the /dist folder on build
        Sitemap({ 
            hostname: 'https://dramantramacademy.com',
            dynamicRoutes: routes 
        }),
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});