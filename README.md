# React Animate OnView

[![npm version](https://badge.fury.io/js/react-animate-onview.svg)](https://badge.fury.io/js/react-animate-onview)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight React component for adding smooth, customizable animations to elements as they enter the viewport. Built with Framer Motion, this package makes it easy to create engaging scroll-based animations in your React applications.

## Features

- Easy to use React component
- Customizable animation types (fade, slide, zoom, rotate)
- Configurable animation duration and delay
- Viewport detection for triggering animations
- Staggered animations for multiple elements
- TypeScript support

## Installation

```bash
npm install react-animate-onview framer-motion
```

or

```bash
yarn add react-animate-onview framer-motion
```

## Usage

Here's a basic example of how to use the `AnimateOnView` component:

```jsx
import React from "react";
import { AnimateOnView } from "react-animate-onview";

const MyComponent = () => {
  return (
    <AnimateOnView animation="fadeInFromBottom" duration={0.5} delay={0.2}>
      <h1>This will animate when it enters the viewport</h1>
    </AnimateOnView>
  );
};

export default MyComponent;
```

## API

The `AnimateOnView` component accepts the following props:

- `animation` (required): The type of animation to apply. Options include:
  - `"fadeInFromBottom"`
  - `"fadeInFromLeft"`
  - `"fadeInFromRight"`
  - `"zoomIn"`
  - `"rotateIn"`
- `duration` (optional): The duration of the animation in seconds. Default is 0.5.
- `delay` (optional): The delay before the animation starts in seconds. Default is 0.
- `staggerDelay` (optional): The delay between each child element's animation when using staggered animations. Default is 0.1.
- `viewportOnce` (optional): If true, the animation only happens once when the element comes into view. Default is false.
- `viewportAmount` (optional): The amount of the element that needs to be in view before the animation triggers. Default is 0.1.

## Examples

### Fade in from bottom

```jsx
<AnimateOnView animation="fadeInFromBottom">
  <p>This paragraph will fade in from the bottom</p>
</AnimateOnView>
```

### Zoom in with delay

```jsx
<AnimateOnView animation="zoomIn" duration={0.7} delay={0.3}>
  <img src="example.jpg" alt="Example" />
</AnimateOnView>
```

### Rotate in once

```jsx
<AnimateOnView animation="rotateIn" viewportOnce={true}>
  <div className="card">
    <h2>Rotating Card</h2>
    <p>This card will rotate in once when it enters the viewport</p>
  </div>
</AnimateOnView>
```

### Staggered animation for multiple elements

```jsx
<AnimateOnView animation="fadeInFromBottom" staggerDelay={0.2}>
  <h2>Staggered Animation</h2>
  <p>This paragraph appears after the heading</p>
  <button>This button comes last</button>
</AnimateOnView>
```

### Complex layout with mixed animations

```jsx
<div className="container">
  <AnimateOnView animation="fadeInFromLeft">
    <h1>Welcome to My Site</h1>
  </AnimateOnView>

  <AnimateOnView animation="fadeInFromBottom" staggerDelay={0.15}>
    <p>Here's some introductory text.</p>
    <button>Call to Action</button>
    <div className="image-gallery">
      <img src="image1.jpg" alt="Image 1" />
      <img src="image2.jpg" alt="Image 2" />
      <img src="image3.jpg" alt="Image 3" />
    </div>
  </AnimateOnView>

  <AnimateOnView animation="zoomIn" viewportAmount={0.3}>
    <footer>
      <p>© 2024 My Company</p>
    </footer>
  </AnimateOnView>
</div>
```

## Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

### Development

To set up the development environment:

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the build process with `npm run build`
4. To test your changes, you can use `npm link` in the package directory and then `npm link react-animate-onview` in your test project

### Reporting Issues

If you find a bug or have a feature request, please open an issue on the GitHub repository. Provide as much information as possible, including steps to reproduce the issue if applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [Framer Motion](https://www.framer.com/motion/) for providing the animation capabilities.
- Inspired by the need for simple, reusable animation components in React applications.

---

Made with ❤️ by Randil Withanage
