import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    meta?: Array<{
        name: string;
        content: string;
    }>;
}

export const SEO = ({ title, description, canonical, meta = [] }: SEOProps) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (description) {
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                metaDescription.setAttribute('content', description);
                document.head.appendChild(metaDescription);
            }
        }

        // Update canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            if (canonicalLink) {
                canonicalLink.setAttribute('href', canonical);
            } else {
                canonicalLink = document.createElement('link');
                canonicalLink.setAttribute('rel', 'canonical');
                canonicalLink.setAttribute('href', canonical);
                document.head.appendChild(canonicalLink);
            }
        }

        // Update additional meta tags
        meta.forEach(({ name, content }) => {
            let metaTag = document.querySelector(`meta[name="${name}"]`);
            if (metaTag) {
                metaTag.setAttribute('content', content);
            } else {
                metaTag = document.createElement('meta');
                metaTag.setAttribute('name', name);
                metaTag.setAttribute('content', content);
                document.head.appendChild(metaTag);
            }
        });

        // Cleanup function
        return () => {
            if (title) {
                document.title = 'Rickonvald CV';
            }
            if (description && metaDescription) {
                metaDescription.remove();
            }
            if (canonical && canonicalLink) {
                canonicalLink.remove();
            }
            meta.forEach(({ name }) => {
                const metaTag = document.querySelector(`meta[name="${name}"]`);
                if (metaTag) {
                    metaTag.remove();
                }
            });
        };
    }, [title, description, canonical, meta]);

    return null;
}; 