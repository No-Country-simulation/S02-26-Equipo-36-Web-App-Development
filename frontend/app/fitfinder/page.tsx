export default function FitFinderPage() {
  return (
    <main className="flex-1 flex-col max-w-[960px] mx-auto w-full pb-20">
      {/*Aqui va el breadcrumb*/}  
      <div className="flex flex-wrap gap-2 py-6 px-4">
        <a
          href="/"
          className="text-[#668863] text-base font-medium leading-normal hover:underline hover:text-primary"
        >
          Home
        </a>
        <span className="text-[#668863] text-base font-medium leading-normal">
          /
        </span>
        <span className="text-[#121811] text-base font-medium leading-normal">
          Fit Finder
        </span>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[#121811] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3">
          Rider Measurements &amp; Preferences
        </h1>
        <p className="text-[#121811]/70 text-base font-normal leading-normal pb-8 px-4 text-center max-w-2xl">
          To find the perfect technical fit for your boots, helmet, and
          competition wear, please provide your measurements below.
        </p>
      </div>
      {/*Aquí va el progress bar*/}
      <div className="flex flex-col gap-3 p-4 bg-white rounded-xl mb-8 border-[#f1f4f0] mx-4">
        <div className="flex gap-6 justify-between">
            <p className="text-[#121811] text-base font-bold leading-normal">Rider Information</p>
            <p className="text-[#121811] text-sm font-normal leading-normal">40%</p>
        </div>
        <div className="rounded-full bg-[#dce5dc] overflow-hidden">
            <div className="h-2 rounded-full bg-primary" style={{width: "40%"}}></div>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-[#668863] text-sm font-normal leading-normal">Step 2 of 5</p>
            <p className="text-[#668863] text-sm font-normal leading-normal">Next: Horse Profile</p>
        </div>
      </div>
      <div className="px-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-[#121811] font-bold block">Height (cm)</label>
                <input className="w-full bg-white border border-[#dc5dc] rounded-lg p-3 focus:ring-primary focus:border-primary" placeholder="175" type="number"/>
            </div>
            <div className="space-y-2">
                <label className="text-[#121811] font-bold block">Foot Size (EU)</label>
                <input className="w-full bg-white border border-[#dc5dc] rounded-lg p-3 focus:ring-primary focus:border-primary" placeholder="39" type="number"/>
            </div>
            <div className="space-y-2">
                <label className="text-[#121811] font-bold block">Leg Lenght (cm)</label>
                <input className="w-full bg-white border border-[#dc5dc] rounded-lg p-3 focus:ring-primary focus:border-primary" placeholder="82" type="number"/>
            </div>
            <div className="space-y-2">
                <label className="text-[#121811] font-bold block">Head Circumferece (cm)</label>
                <input className="w-full bg-white border border-[#dc5dc] rounded-lg p-3 focus:ring-primary focus:border-primary" placeholder="56" type="number"/>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
                <label className="text-[#121811] font-bold block">Primary Discipline</label>
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 p-4 border border-[#dce5dc] rounded-lg cursor-pointer hover:bg-[#2be619]/10 transition-colors">
                        <input className="text-[#2be619] focus:ring-[#2be619] border-[#dc5dc]" name="discipline" type="radio"/>
                        <span>img</span>
                        <span>Dressage</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-primary bg-primary/10 rounded-lg cursor-pointer">
                        <input className="text-[#2be619] focus:ring-[#2be619] border-[#dc5dc]" defaultChecked name="discipline" type="radio"/>
                        <span>img</span>
                        <span>Jumping</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-[#dce5dc] rounded-lg cursor-pointer hover:bg-[#2be619]/10 transition-colors">
                        <input className="text-[#2be619] focus:ring-[#2be619] border-[#dc5dc]" name="discipline" type="radio"/>
                        <span>img</span>
                        <span>Western / Eventing</span>
                    </label>
                </div>
            </div>
            <div className="space-y-4">
                <label className="text-[#121811] font-bold block">Experience Level</label>
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 p-4 border border-[#dce5dc] rounded-lg cursor-pointer hover:bg-primary/10 transition-color">
                        <input className="text-primary focus:ring-primary border-[#dcedc]" name="experience" type="radio" />
                        <span>Beginner (0-2 years)</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-[#dce5dc] rounded-lg cursor-pointer hover:bg-primary/10 transition-color">
                        <input className="text-primary focus:ring-primary border-[#dcedc]" name="experience" type="radio" />
                        <span>Intermediate (Competitive)</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-[#dce5dc] rounded-lg cursor-pointer hover:bg-primary/10 transition-color">
                        <input className="text-primary focus:ring-primary border-[#dcedc]" name="experience" type="radio" />
                        <span>Advanced / Professional</span>
                    </label>
                </div>
            </div>
        </div>
        <div className="pt-6 border-t border-[#f1f4f0]">
          <h3 className="text-lg font-bold mb-6">
            Boot & Helmet Fit Preference
          </h3>

          <div className="flex flex-wrap gap-4">
            <button className="flex-1 min-w-[120px] py-4 px-6 rounded-xl border border-[#dce5dc] hover:border-primary group cursor-pointer">
              <span className="block text-sm text-[#668863] group-hover:text-primary">
                Tight / Snug
              </span>
              <span className="font-bold group-hover:text-primary">Narrow</span>
            </button>

            <button className="flex-1 min-w-[120px] py-4 px-6 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
              <span className="block text-sm text-primary mb-1">Standard Fit</span>
              <span className="font-bold">Medium</span>
            </button>

            <button className="flex-1 min-w-[120px] py-4 px-6 rounded-xl border border-[#dce5dc] hover:border-primary group cursor-pointer">
              <span className="block text-sm text-[#668863] group-hover:text-primary">
                Comfort / Relaxed
              </span>
              <span className="font-bold group-hover:text-primary">Wide</span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10">
          <button className="px-8 py-3 rounded-lg border border-[#dce5dc] text-[#121811] font-bold hover:bg-[#f1f4f0] cursor-pointer">
            Back
          </button>

          <button className="px-10 py-3 rounded-lg bg-primary text-[#122111] font-extrabold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 cursor-pointer">
            Continue to Horse Profile
          </button>
        </div>
      </div>
    </main>
  );
}
