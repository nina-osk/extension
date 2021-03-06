import { EscPos} from "escpos-xml"

let btnimpresora = document.getElementById('NombreImpresora');

btn.addEventListener("click", NombreImpresoraNueva);

function NombreImpresoraNueva(data0){

    const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <document>
        <line-feed />
        <align mode="center">
            <bold>
                <text-line size="1:1">{{title}}</text-line>
            </bold>
            <line-feed />
            <small>
                <text-line>{{subtitle}}</text-line>
            </small>
        </align>
        <small>
            <text-line>Date: ${data0.hour}{{moment date format="DD/MM/YYYY HH:mm:ss"}}</text-line>
            <text-line size="1:0">{{numeral price format="$ 0,0.00"}}</text-line>
            <text-line size="1:0">{{paddedString}}</text-line>
        </small>
        <line-feed />
        <underline>
          <text-line>{{underline}}</text-line>
        </underline>
        <line-feed />
        <align mode="center">
            <white-mode>
                <text-line size="1:1">{{description}}</text-line>
            </white-mode>
            <line-feed />
            <bold>
                {{#if condictionA}}
                <text-line size="1:0">True A</text-line>
                {{else if condictionB}}
                <text-line size="1:0">True B</text-line>
                {{else}}
                <text-line size="1:0">False</text-line>
                {{/if}}
            </bold>
        </align>
        <line-feed />
        <align mode="center">
            <barcode system="CODE_128" width="DOT_250">{{barcode}}</barcode>
        </align>
        <line-feed />
        <align mode="center">
            <qrcode ecl="M">{{qrcode}}</qrcode>
        </align>
      <paper-cut/>
    </document>
  `;
  
  const data = {
    title: 'Tile',
    subtitle: 'Subtitle',
    description: 'This is a description',
    date: new Date(),
    price: 1.99,
    paddedString: '&nbsp;&nbsp;&nbsp;&nbsp;Line padded with 4 spaces',
    condictionA: false,
    condictionB: true,
    barcode: '12345678',
    qrcode: 'hello qrcode',
    underline: 'underline'
  }
  
  const buffer = EscPos.getBufferFromTemplate(xml, data);
  // send this buffer to a stream (eg.: bluetooth)

}

       
