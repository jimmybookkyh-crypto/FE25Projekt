function Footer() {
  const year = new Date().getFullYear();

  return <footer>&copy; {year}</footer>;
}

export default Footer;