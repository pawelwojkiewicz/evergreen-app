import { createPipeFactory, SpectatorPipe } from "@ngneat/spectator";
import { ToSlugPipe } from "./to-slug.pipe";

describe('ToSlugPipe', () => {
  let spectator: SpectatorPipe<ToSlugPipe>;
  const createPipe = createPipeFactory(ToSlugPipe);

  it('should transform text to slug text', () => {

    spectator = createPipe(`{{ '"objectivity" is a great company. <3'  | toSlug }}`);

    expect(spectator.element).toContainText('objectivity-is-a-great-company-3');

  })
});
