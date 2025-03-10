# react-kbo-logos

_Read this in other languages: [한국어](README.ko.md)_

[![npm version](https://img.shields.io/npm/v/react-kbo-logos.svg)](https://www.npmjs.com/package/react-kbo-logos)
[![npm downloads](https://img.shields.io/npm/dm/react-kbo-logos.svg)](https://www.npmjs.com/package/react-kbo-logos)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/Gwanghun-Im/react-kbo-logos)](https://github.com/Gwanghun-Im/react-kbo-logos/stargazers)
[![hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FGwanghun-Im%2Freact-kbo-logos&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

A React component library providing logos for KBO League teams.

## Installation

```bash
npm install react-kbo-logos
```

## Usage

```tsx
import {
  KIA,
  DOOSAN,
  LG,
  SSG,
  KIWOOM,
  KT,
  NC,
  SAMSUNG,
  LOTTE,
  HANWHA,
} from "react-kbo-logos"

function App() {
  return (
    <div>
      <KIA size={100} />
      <DOOSAN size={80} />
      <LG size={60} />
      {/* Other team logos can be used in the same way */}
    </div>
  )
}
```

👇 Check out the demo in the website below
[gwanghun.im](https://www.gwanghun.im/tools/react-kbo-logos)

## Available Components

- `<DOOSAN />` - Doosan Bears
- `<LG />` - LG Twins
- `<KIA />` - KIA Tigers
- `<SSG />` - SSG Landers
- `<KIWOOM />` - Kiwoom Heroes
- `<KT />` - KT Wiz
- `<NC />` - NC Dinos
- `<SAMSUNG />` - Samsung Lions
- `<LOTTE />` - Lotte Giants
- `<HANWHA />` - Hanwha Eagles

## Props

Each logo component accepts the following props:

- `size?: number` - Size of the logo (in pixels, default: 40)
- `className?: string` - CSS class for additional styling

## Requirements

- React >= 16.8.0
- React DOM >= 16.8.0

## Development

To start development:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

To build the package:

```bash
npm run build
```

## Browser Support

This package uses SVG for the logos, which is supported by all modern browsers.

## Contributing

Contributions are always welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Keywords

- react
- kbo
- logo
- baseball
- korean baseball
- svg

## Repository

[GitHub Repository](https://github.com/Gwanghun-Im/react-kbo-logos)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
