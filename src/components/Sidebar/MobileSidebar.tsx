import { MobileSidebarMenu } from "./MobileSidebarMenu";
import { PaneVisibilityButton } from "./PaneVisibilityButton";

export const MobileSidebar = () => {
  return (
    <section className="fixed bottom-[5.5rem] right-[1.25rem] z-20 xl:hidden">
      <div className="relative mb-6">
        <MobileSidebarMenu />
      </div>

      <PaneVisibilityButton />
    </section>
  );
};
