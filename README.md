# react-animate-onview

A React component that easily adds Framer Motion animations to elements when they come into view.

## Installation

```bash
npm install react-animate-onview framer-motion
```

## Usage

```jsx
import React from "react";
import { AnimateOnView } from "react-animate-onview";

const AboutSection = () => {
  return (
    <AnimateOnView
      animation="fadeInFromBottom"
      duration={0.5}
      delay={0.2}
      viewportOnce={true}
    >
      <div>
        <h2>About Us</h2>
        <p>We are a company dedicated to...</p>
      </div>
    </AnimateOnView>
  );
};

export default AboutSection;
```

## Props

- `animation`: The type of animation to apply. Options include:
  - `fadeInFromBottom`
  - `fadeInFromLeft`
  - `fadeInFromRight`
  - `zoomIn`
  - `rotateIn`
- `duration`: The duration of the animation in seconds (default: 0.5)
- `delay`: The delay before the animation starts in seconds (default: 0)
- `viewportOnce`: If true, the animation only happens once when the element comes into view (default: false)
- `viewportAmount`: The amount of the element that needs to be in view before the animation triggers (default: 0.1)

## License

MIT
