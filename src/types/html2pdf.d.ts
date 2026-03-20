declare module 'html2pdf.js' {
  function html2pdf(): Html2PdfWrapper;
  interface Html2PdfWrapper {
    from(el: HTMLElement): this;
    set(opt: object): this;
    save(): Promise<void>;
  }
  export = html2pdf;
}
