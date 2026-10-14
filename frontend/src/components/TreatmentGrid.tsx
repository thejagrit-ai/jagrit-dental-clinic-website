import Link from "next/link";
import { treatments } from "@/lib/site";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function TreatmentGrid() {
  return (
    <div className="treatment-grid" data-stagger>
      {treatments.map((item, index) => (
        <article id={item.slug} className={`treatment-card group treatment-${item.slug}`} key={item.slug}>
          <BeforeAfterSlider beforeSrc={item.beforeImage} afterSrc={item.afterImage} comparisonSrc={"comparisonImage" in item ? item.comparisonImage : undefined} alt={`${item.title} treatment comparison`} />
          <div className="border-x border-b border-forest/15 bg-white p-6 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl text-forest sm:text-[28px]">{item.title}</h3>
              <span className="shrink-0 text-xs tracking-[.12em] text-stone">{item.duration}</span>
            </div>
            <p className="mt-4 max-w-xl leading-7 text-stone">{item.summary}</p>
            <Link href="/appointment" className="text-link mt-6 inline-flex">Ask about this treatment <span aria-hidden>↗</span></Link>
          </div>
          {index === 0 && <p className="mt-3 text-xs leading-5 text-stone">Drag the handle to compare each before and after view. Clinical results vary and imagery requires patient consent.</p>}
        </article>
      ))}
    </div>
  );
}
