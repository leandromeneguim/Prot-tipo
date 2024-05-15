// Accordion
$('.accordion').each(function () {
  $thisAccordion = $(this);
  $thisAccordion.click(function () {
    this.classList.toggle("active");
    const panel = $(this).find('.panel');
    panel.toggle();
  });
})