<template>
  <div>
    <AppSection class="bg-lilac bg-lilac-girl" position="left">
      <h1>Welcome!</h1>
      <p>Hi! This is Kantai. This template features chibi versions of characters from the anime and video game series, Kantai Collection. 
        Built with <a href="https://nuxt.com/" target="_blank">Nuxt</a>, <a href="https://vuejs.org/" target="_blank">Vue.js</a>, and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, Kantai is perfect for creating a portfolio or network website. 
        Whether you're showcasing your work or building an online community, this template offers a delightful and engaging design to captivate your audience.</p>
      <Button 
        url="/" 
        label="Hover me! Hover me!" 
        backgroundColor="bg-apricot"
        borderColor="border-sunflower"
      />
    </AppSection>

    <AppSection id="about" class="bg-breeze bg-breeze-girl" position="right">
      <h2>About</h2>
      <p>The theme's colors and background image assets are fully configurable through the <pre class="inline">tailwind.config.js</pre> file. This allows you to easily customize the look and feel of your site to match your personal style or branding requirements.</p>
      <p>Each element of the theme is broken down into bite-sized components, making it more manageable and easier to customize. This modular approach ensures that you can efficiently adjust and extend the template to suit your needs.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="bg-plum"
        borderColor="border-lilac"
      />
    </AppSection>

    <AppSection id="network" class="bg-apricot bg-apricot-girl" position="left">
      <h2>Network</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="bg-lilac"
        borderColor="border-lime"
      />
    </AppSection>
    <AppSection id="blog" class="bg-lime bg-lime-girl" position="right">
      <h2>Blog</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="bg-apricot"
        borderColor="border-lilac"
      />
    </AppSection>
    <AppSection id="portfolio" class="bg-sunflower bg-sunflower-girl" position="left">
      <h2>Portfolio</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more"
        backgroundColor="bg-lime" 
        borderColor="border-breeze"
      />
    </AppSection>
    <AppSection id="contact" class="bg-plum bg-plum-girl" position="right">
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="bg-breeze"
        borderColor="border-sunflower"
      />
    </AppSection>
  </div>
</template>
