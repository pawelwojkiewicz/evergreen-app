import { createPipeFactory, SpectatorPipe } from "@ngneat/spectator";
import { EllipsisPipe } from "./ellipsis.pipe";

describe('EllipsisPipe', () => {
  let spectator: SpectatorPipe<EllipsisPipe>;
  const createPipe = createPipeFactory(EllipsisPipe);

  it(`should cut text to 10 characters and add '...' in the end`, () => {

    spectator = createPipe(`{{ 'Very long text'  | ellipsis: 10 }}`);
    const truncatedText =  spectator.element.textContent.replace(/\./g,"").length

    expect(spectator.element.textContent).toEqual('Very long ...');
    expect(truncatedText).toEqual(10);
  });
})
