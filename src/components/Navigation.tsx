import React from 'react';
import NextLink from 'next/link';
import { Box, Link } from 'rebass';

interface NavLink {
  href: string;
  label: string;
  key?: string;
}

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map((link: NavLink) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Navigation = () => (
  <Box as='nav' variant='nav'>
    <Box as='ul' variant='nav.ul'>
      <Box as='li' variant='nav.li'>
        <NextLink href='/' passHref>
          <Link variant='nav.a'>Home</Link>
        </NextLink>
      </Box>
      {links.map(({ key, href, label }) => (
        <Box as='li' variant='nav.li' key={key}>
          <Link variant='nav.a' href={href}>
            {label}
          </Link>
        </Box>
      ))}
    </Box>
  </Box>
);

export default Navigation;
