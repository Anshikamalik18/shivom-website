# Deployment Guide - Shivom MBA College Website

## Ready to Deploy! 🚀

Your website is production-ready and can be deployed to various platforms.

## 1. Deployment to Vercel (Recommended)

### Step 1: Prepare Code
```bash
# Make sure everything is committed to git
cd /Users/pradeepdahiya/Documents/Repositories/shivom-website
git add .
git commit -m "Initial website setup"
```

### Step 2: Push to GitHub
```bash
# Create repository on GitHub
# Then push code
git push origin main
```

### Step 3: Deploy on Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Done! Your site is live

**Advantages:**
- ✅ Automatic deployments on git push
- ✅ Built specifically for Next.js
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Zero-config deployment

---

## 2. Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Or connect GitHub for auto-deploy
# https://app.netlify.com/
```

---

## 3. Deploy to AWS

### Using AWS Amplify
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Deploy
amplify publish
```

### Using AWS EC2
```bash
# Build
npm run build

# Upload to EC2 instance
scp -r .next/ ec2-user@your-instance:/var/www/

# Install dependencies on server
npm install --production

# Start server
npm start
```

---

## 4. Deploy to Google Cloud

```bash
# Install Google Cloud SDK
gcloud init

# Deploy
gcloud app deploy

# Configure app.yaml (example):
```

**app.yaml:**
```yaml
runtime: nodejs18
handlers:
  - url: /.*
    script: auto
```

---

## 5. Deploy to Azure

```bash
# Install Azure CLI
brew install azure-cli

# Login
az login

# Create resource group
az group create --name shivom --location eastus

# Deploy app service
az appservice plan create --name shivom-plan --resource-group shivom

# Create app
az webapp create --resource-group shivom --plan shivom-plan --name shivom-college
```

---

## 6. Traditional Server Deployment

### On Linux Server (Ubuntu/CentOS)

```bash
# 1. SSH to server
ssh user@your-server.com

# 2. Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Clone repository
git clone https://github.com/yourusername/shivom-website.git
cd shivom-website

# 4. Install dependencies
npm install

# 5. Build
npm run build

# 6. Start with PM2 (process manager)
npm install -g pm2
pm2 start npm --name "shivom" -- start

# 7. Save PM2 configuration
pm2 save
pm2 startup
```

### Configure Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name shivomcollege.in www.shivomcollege.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Enable SSL with Let's Encrypt

```bash
sudo certbot --nginx -d shivomcollege.in -d www.shivomcollege.in
```

---

## 7. Deploy with Docker

### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./
COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Push

```bash
# Build
docker build -t shivom-website:latest .

# Run locally
docker run -p 3000:3000 shivom-website:latest

# Push to registry
docker tag shivom-website:latest your-registry/shivom-website:latest
docker push your-registry/shivom-website:latest
```

---

## Environment Configuration

### Production Environment Variables

Create `.env.production.local`:

```env
NEXT_PUBLIC_SITE_URL=https://shivomcollege.in
NEXT_PUBLIC_API_URL=https://api.shivomcollege.in
ANALYTICS_ID=your-analytics-id
```

---

## Pre-Deployment Checklist

- [ ] Update all college information
- [ ] Add college logo and images
- [ ] Verify all links work correctly
- [ ] Test on mobile devices
- [ ] Check SEO metadata
- [ ] Set up contact form backend
- [ ] Configure domain name
- [ ] Set up SSL certificate
- [ ] Run security check (`npm audit`)
- [ ] Performance testing
- [ ] Set up analytics/monitoring
- [ ] Create backup plan

---

## Post-Deployment Monitoring

### Analytics Setup

```javascript
// Add to _app.tsx or layout.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  }, []);

  return <Component {...pageProps} />;
}
```

### Sentry Error Tracking

```bash
npm install @sentry/nextjs
```

### Health Checks

Set up monitoring:
- Uptime monitoring (Uptimerobot.com)
- Error tracking (Sentry.io)
- Analytics (Google Analytics)
- Performance monitoring (Vercel Analytics)

---

## Domain Configuration

### Update DNS Records

For your domain registrar, add:

```
Type: A
Name: @
Value: [Your Server IP or Vercel IP]
TTL: 3600

Type: CNAME
Name: www
Value: [Your domain]
TTL: 3600
```

### Update nameservers (if using Vercel/Netlify)

Use the nameservers provided by your hosting platform.

---

## Rollback Procedure

If something goes wrong:

```bash
# With Vercel
vercel rollback

# With traditional server
git reset --hard <previous-commit>
npm run build
pm2 restart shivom

# With Docker
docker run -p 3000:3000 shivom-website:previous-tag
```

---

## Performance Optimization

### Enable Gzip Compression
```nginx
gzip on;
gzip_types text/plain text/css text/xml text/javascript 
    application/x-javascript application/xml+rss;
```

### Set Cache Headers
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Enable HTTP/2
```nginx
listen 443 ssl http2;
```

---

## SSL Certificate

### Auto-renewal with Let's Encrypt

```bash
# Check renewal status
sudo certbot renew --dry-run

# Automatic renewal is set up if using:
sudo systemctl enable certbot.timer
```

---

## Backup & Recovery

```bash
# Backup database and uploads
tar -czf backup.tar.gz /var/www/shivom-website

# Upload to S3 or cloud storage
aws s3 cp backup.tar.gz s3://your-bucket/

# Recovery
tar -xzf backup.tar.gz -C /var/www/
```

---

## Support & Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Find process using port 3000
lsof -i :3000
# Kill process
kill -9 <PID>
```

**Build Fails**
```bash
# Clear cache
rm -rf .next
npm cache clean --force
npm install
npm run build
```

**SSL Certificate Issues**
```bash
# Verify certificate
openssl s_client -connect shivomcollege.in:443
```

---

## Performance Metrics After Deployment

Monitor these metrics:

- ✅ Page Load Time < 2s
- ✅ First Contentful Paint < 1s
- ✅ Lighthouse Score > 90
- ✅ 99.9% Uptime
- ✅ Zero security issues

---

## Getting Help

- Next.js Docs: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support
- Stack Overflow: Tag with `next.js`

---

## Deployment Summary

| Platform | Difficulty | Cost | Benefits |
|----------|-----------|------|----------|
| Vercel | Easy | Free/Paid | Auto-deploy, CDN, Analytics |
| Netlify | Easy | Free/Paid | Ease of use, CDN |
| AWS | Medium | Varies | Flexibility, Scale |
| Google Cloud | Medium | Free Tier | Integration with GCP |
| Traditional Server | Hard | Monthly | Full Control |
| Docker | Medium | Varies | Portability |

---

**Recommended:** Vercel for easiest deployment and best Next.js integration.

Your website is ready to go live! 🎉
