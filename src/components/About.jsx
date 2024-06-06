import React from 'react'

function About() {
  return (
    <div id='services' class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 ">
    <img src="https://4kwallpapers.com/images/wallpapers/texture-dark-background-purple-1920x1200-3086.jpg" alt="/bg" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sherbimet tona</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Në agjencinë tonë të turizmit, ofrojmë një gamë të gjerë shërbimesh për të përmbushur çdo dëshirë tuajën për udhëtime.</p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          <p>Bileta <span aria-hidden="true">&rarr;</span></p>
          <p>Avioni <span ></span></p>
          <p>Trageti<span></span></p>
          <p>Autobusi<span ></span></p>
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div class="flex flex-col-reverse">
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Makina me qera</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Guida Turistike</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Siguracione shendeti</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Siguracione makinash</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  
  )
}

export default About
