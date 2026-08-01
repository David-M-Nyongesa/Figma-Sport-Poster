import PosterLayout from "./components/PosterLayout";
import PosterImage from "./components/PosterImage";
import PosterHeading from "./components/PosterHeading";
import PosterBadge from "./components/PosterBadge";
import PosterSubtext from "./components/PosterSubtext";
import CTAButton from "./components/CTAButton";
//After these lines, akina PosterLayout can be used as HTML tags.
import KenImage from "./assets/33f36b49a8ab5f18359784efa09f6ea40facf81c.png"


const IMAGE_URL = KenImage;

export default function App() {
  return (
    <PosterLayout>
      {/* left side - photo, name, about */}
      <div className="relative flex flex-col justify-end min-h-125 md:min-h-175">
        <PosterImage src={IMAGE_URL} alt="Ken Wachira" />

        <div className="relative flex flex-col gap-5 px-10 pb-10 text-white">
          <PosterHeading
            size="text-4xl sm:text-5xl md:text-[60px]"
            weight="font-semibold"
          >
            Ken
            <br />
            Wachira
          </PosterHeading>

          <div>
            <PosterBadge>Basketball Coach</PosterBadge>
          </div>

          <PosterSubtext
            label="About Ken"
            labelClassName="text-white text-base mb-5"
            textClassName="text-gray-300 max-w-[420px]"
          >
            Meet Ken Wachira, a basketball strategist known for his quick
            decision-making and game-reading abilities. His coaching style
            emphasizes enhancing court vision and predicting opponents'
            moves. Gain exclusive insights into basketball tactics and
            honing your 3-point game with Ken Wachira, the maestro behind
            the arc.
          </PosterSubtext>

          <p className="text-xl italic font-normal leading-7 text-[#E88F40] mt-2">
            "Read the game, own the court."
          </p>
        </div>
      </div>

      {/*The right side - the actual skills/stats panel */}
      <div className="bg-white text-black p-8 sm:p-9 flex flex-col gap-10">
        <section>
          <PosterHeading size="text-[13px]" underline color="text-black" className="mb-4">
            Decisive Moves Specialist
          </PosterHeading>
          <div className="flex flex-col gap-3.5">
            <PosterSubtext label="Strength">
              Strategic Vision & Quick Decision-Making & 3-Point Shooting
            </PosterSubtext>
            <PosterSubtext label="Expertise">
              Reading the game, making decisive moves, excellent 3-point
              shooting.
            </PosterSubtext>
          </div>
        </section>

        <section>
          <PosterHeading size="text-[13px]" underline color="text-black" className="mb-4">
            Visionary Insights
          </PosterHeading>
          <div className="flex flex-col gap-3.5">
            <PosterSubtext label="Coaching Focus">
              Improving court vision, anticipating opponent moves
            </PosterSubtext>
            <PosterSubtext label="Main Focus">
              <ul className="list-disc pl-4.5 space-y-1">
                <li>Tactical insights</li>
                <li>Rapid decision-making drills</li>
              </ul>
            </PosterSubtext>
          </div>
        </section>

        <section>
          <PosterHeading size="text-[13px]" underline color="text-black" className="mb-4">
            Training Positions
          </PosterHeading>
          <div className="flex flex-col gap-3.5">
            <PosterSubtext label="Main Focus">
              <ul className="list-disc pl-4.5 space-y-1">
                <li>Point guards</li>
                <li>Small forwards</li>
                <li>Team strategists</li>
              </ul>
            </PosterSubtext>
            <PosterSubtext label="Also">
              <ul className="list-disc pl-4.5 space-y-1">
                <li>Trains all basketball Positions</li>
              </ul>
            </PosterSubtext>
          </div>
        </section>

        <section>
          <PosterHeading size="text-[13px]" underline color="text-black" className="mb-4">
            Accolades
          </PosterHeading>
          <PosterSubtext>
            <strong>MVP 2022</strong>, renowned for exceptional 3-point
            shooting skills.
          </PosterSubtext>
        </section>

        <div className="pt-2">
          <CTAButton
            label="Book a Training Session"
            onClick={() => alert("I'll hook a real form later")}
          />
        </div>
      </div>
    </PosterLayout>
  );
}