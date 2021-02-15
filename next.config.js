const isProd = process.env.NODE_ENV === 'production'
const cdnUrl = process.env.CDN_URL

module.exports = {
    assetPrefix: isProd && cdnUrl ? cdnUrl : ''
}