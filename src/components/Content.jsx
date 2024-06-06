import React , {useEffect} from 'react'
import bg from '../assets/bg.png'
import Aos from 'aos';
import 'aos/dist/aos.css'; 


function Content() {
  useEffect(()=>{
    Aos.init({duration:2000});
  
   },[])
  return (
    <div id='about' class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div data-aos="fade-up" data-aos-duration="3000" class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-indigo-600">Çmimet e pashmangshme dhe mbulimi i plotë</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Përjetojeni botën me lehtësi</h1>
              <p class="mt-6 text-xl leading-8 text-gray-700">Zgjidhni ne për udhëtime të udhëzuar me avion, autobus dhe anije. Njihuni me sigurimin e makinave dhe shëndetësor, të gjitha në çmime të pashmangshme.</p>
            </div>
          </div>
        </div>
        <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src={bg} alt=""/>
        </div>
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div data-aos="fade-up"   data-aos-duration="3000" class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>Zgjidhni ne për udhëtime të udhëzuar me avion, autobus dhe anije. 
                Ne ofrojmë sigurimin e makinave dhe shëndetit për qetësinë tuaj të mendjes. 
                Njihuni me çmimet tona konkurruese, duke bërë udhëtimin të arsyeshëm pa kompromis në cilësi.
                 Guidat tona eksperte sigurojnë një përvojë të paharrueshme, të përshtatur me nevojat tuaja.
                  Me ne, eksploroni botën me vetëbesim dhe lehtësi.
                   Besoni ekipit tonë të dedikuar për të trajtuar të gjitha detajet e udhëtimit, kështu që ju mund të përqendroheni në aventurën.
                    Bashkohuni me një numër të madh të klientëve të kënaqur që kanë zbuluar gëzimin e udhëtimit pa stres me agjencinë tonë.
                  Le të bëjmë ëndrrat tuaja të udhëtimit realitet.</p>
                  <ul class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <span><strong class="font-semibold text-gray-900">Udhëtime të Kurruara me Ekspertizë.</strong> Zbuloni destinacione të zgjedhura me kujdes dhe përvoja unike të përshtatura me interesat tuaja.</span>
                </li>
                <li class="flex gap-x-3">
                  <span><strong class="font-semibold text-gray-900">Ndihmë e Plotë në Udhëtim.</strong> Nga rezervimi deri në nisjen, ekipi ynë ofron mbështetje të plotë, duke siguruar një udhëtim pa stres.</span>
                </li>
                <li class="flex gap-x-3">
                  <span><strong class="font-semibold text-gray-900">Shërbime Personalizuar.</strong> Merrni itinerare të personalizuara, avantazhe ekskluzive dhe vëmendje të personalizuar në çdo hap të rrugës.</span>
                </li>
                <li class="flex gap-x-3">
                  <span><strong class="font-semibold text-gray-900">Eksperiencë e Paharrueshme.</strong> Jepni jetë ëndrrave tuaja të udhëtimit me udhëtimet tona të përshtatura me kujdes dhe ofertat e veçanta.</span>
                </li>
                <li class="flex gap-x-3">
                  <span><strong class="font-semibold text-gray-900">Siguri dhe Besueshmëri.</strong> Kujdesi për klientët është në qendër të shërbimeve tona, duke ofruar siguri dhe besueshmëri gjatë gjithë udhëtimit tuaj.</span>
                </li>
                <li class="flex gap-x-3">
                  <span><strong class="font-semibold text-gray-900">Përvojë Ndryshe.</strong> Njoftoni kulturat dhe traditat e vendeve të ndryshme me udhëtime tona të personalizuara dhe ekskluzive.</span>
                </li>
                <li class="flex gap-x-3">
                  <span><strong class="font-semibold text-gray-900">Bashkohuni me Ne.</strong> Kuptojmë pasionin tuaj për udhëtimin dhe ofrojmë një eksperiencë të ndryshme dhe tërheqëse për klientët tanë të sinqertë.</span>
                </li>
              </ul>
              <div>
                <p class="mt-8 flex items-center">

                  Udhetimi pa probleme me sherbime tona te plota. Asnje shqetesim, vetem aventura te paharrueshme.
                </p>
                <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Përjetoni Udhetim te Paanshëm</h2>
                <p class="mt-6">Planifikoni udhëtimin tuaj pa stres. Guidat tona eksperte dhe çmimet e pashmangshme sigurojnë një udhëtim të paharrueshëm çdo herë.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content