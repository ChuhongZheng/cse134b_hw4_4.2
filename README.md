# cse134b_hw3_portfolio_css

## Part 1 - Standards Based CSS Use (30 pts + 4 EC points)

Include the link to your website and the Github repo with the code on the first page of your document.

To demonstrate CSS knowledge, use the technology to style your HTML pages from the previous homework (HW2). You may need to add classes, ids, and restructure your elements in order to do this task. That is fine. However, do not convert your site to a <div> dominant design - this can result in significant point loss.

To layout your page you MUST use CSS Flexbox and/or CSS Grid (10 pts). You do not have to account for ancient browsers so assume Edge Chromium, Chrome, latest Safari and latest Firefox level access.

To style your page, use whichever CSS properties you like, but you must show demonstration of these intermediate or advanced ideas:

- CSS Variables (with fallbacks while using variables) used in at least two different styling contexts (2 pts)
- Custom Fonts (also with fallback to a serif or sans serif font in case of failure). For full credit code must show signs of the font being imported, you CANNOT rely on your browser already having your font of choice. (2 pts)
- Relative units including but not limited to em, rem, %. (3 pts)
- Dynamic viewport units including but not limited to dvw, dvh.  (2 pts)
- CSS Animations, Transitions and Transforms (3 pts)
- Media Queries (See Part 3 - Responsive Web Design)
- Nested and Scoped CSS (4 pts)
- Any new CSS-related feature from Baseline 2024 or Baseline 2025 (see https://web.dev/baseline/2024). For full credit, include in your submission a 2+ sentence-long description of the feature you chose to implement. (2 pts for correct implementation of the feature, 2 pts for the description)

### Extra Credit: 

Some of the following might not have the maximum adoption (currently, most are hovering around 87-88% adoption) but are worth trying out:

- Use wider gamut color with color() and color-mix() (2 pts)
- New selectors like has() (2 pts)

Any CSS written should be as standard as is possible. 

## Part 2 - Image Usage (15 pts)

To further enhance your page presentation you should use images. Our minimum threshold for image usage is "a reasonable amount" based on your webpage content - we will take a holistic approach to this.

- You may use images of any form (GIF, JPEG, WebP, SVG, etc.), but make sure that the types are appropriate for the content served (6 points)

- Your images should be optimized for delivery (3 pts) - you should address delivering the appropriate size and/or type of image given the needs of responsive design discussed in the next section. The use of the <picture> tag and the srcset as well as corresponding aspects of media queries are excellent tools for this, so you are not sending too many bytes to small or lower-powered devices.
- Accessibility issues with your images such as alternative text, proper use of contrast and proper use of foreground or background should be accounted for (6 pts)
- To adjust pictures with their frames we recommend using object-position and object-fit attributes.

## Part 3 - Responsive Design (10 points)

To address device diversity your site should practice the principle of responsive web design. You should account for three types of form factors. Very small screen (phone), tablet or restrictive laptop, and desktop (6 pts total). Employ appropriate pixel breakpoints based upon those factors. There may be variation of those dimensions so do a little research (Note: DevTools can help simulate different screen sizes)

Make sure your CSS layouts reflow appropriately and do not require pinch, zoom, or unnecessary horizontal scroll (3 pts). Also make sure per the previous section that images are sized appropriately per device dimension.

Lastly, you may see that the different devices suggest concrete interface changes (e.g.: emergence of a Hamburger menu, touch-aware layout, etc.). You need to show evidence that your design adjusts to address such things (1 pt).

 

## Part 4 - Aesthetics and Usability (10 pts + 5 EC)

The look of the site and our ability as end users to understand what you are doing is paramount. No matter how well we do our sites functionally, if we have a poor experience, we will ultimately fail.

We award up to 5 pts for the aesthetics and 5 ptsfor the usability of the site. If you are simple and precise in look  (aka "minimalistic") and obvious in navigation, you will likely get most of the points, but there is inevitable subjectivity based upon the interpretation of the graders. While we have kept the amount of points very low, understand in "real life" most people would attach most of the points here. Particularly excellent jobs may receive up to 5 extra credit points at our discretion.

 

## Restrictions and Logistic Details

- All CSS must be hand authored - no frameworks like Twitter Bootstrap or Tailwind (points can be lost).
- You may not purchase a theme or represent an existing design as your own work. While you are free to use such things as inspiration, direct usage will be considered an AIP violation
- You may use stock photography images with or without watermarks. If you use stock imagery out of courtesy, provide HTML comment situations or use a <cite> element to show us where you got the images. This is an important thing to get used to, as misuse of images online can and does resort in legal demand letters. Be aware of what you are pulling in, and think about the copyrights/licences.
- AI Image copyright laws are sensitive around the subject, and regulations around the world are not up to date yet. If you choose to use AI images, review the copyright and usage rules of the tool of your choice.
- You should still not be using JS in your assignment at this stage. You can continue to stub out files or plan for JS, which will be included in the final  steps.