export function scrollToSection(sectionId, buttonId) {
    const handleClickScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return { handleClickScroll, buttonId };
  }
