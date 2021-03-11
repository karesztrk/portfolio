import React from 'react';
import Helmet from 'react-helmet';
import {
  url,
  defaultDescription,
  defaultTitle,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo,
} from 'data/config';

export const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
}) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.github}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.youtube}",
			"${socialLinks.facebook}"
		]
  	}`;

  return (
    <Helmet>
      <meta name='description' content={description} />

      <script type='application/ld+json'>{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang='en' dir='ltr' />
    </Helmet>
  );
};
