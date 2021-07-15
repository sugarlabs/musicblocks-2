// -- model component -------------------------------------------------------------------------------
import IArtboardManagerModel from '../../models/artboard/ArtboardManager';
const _ArtboardManagerModel = new IArtboardManagerModel();
import IArtboardModel from '../../models/artboard/Artboard';
import { useEffect, useState } from 'react';
import Artboard from './Artboard';
// -- view-model component definition --------------------------------------------------------------

/**
 * ViewModel of the ArtboardManager Framework component.
 */
export default function (): JSX.Element {
  const [artboardList, setartboardList] = useState([] as IArtboardModel[]);
  const [artboardId, setartboardId] = useState<number>();
  const [currentArtboard, setCurrentArtboard] = useState<IArtboardModel>();

  const getArtboards = () => {
    return _ArtboardManagerModel.getArtboards();
  };

  useEffect(() => {
    setartboardList(getArtboards());
  }, [getArtboards]);

  useEffect(() => {
    const defaultArtboard = new IArtboardModel(0);
    let artboard = defaultArtboard;
    if (artboardList.find((board) => board._id == artboardId)) {
      artboard = artboardList.find((board) => board._id == artboardId)!;
    }
    setartboardId(artboard._id);
    setCurrentArtboard(artboard);
  }, [artboardList, artboardId]);

  const addArtboard = (id: number) => {
    _ArtboardManagerModel.addArtboard(id);
    setartboardList(getArtboards());
  };

  const removeArtboard = (id: number) => {
    _ArtboardManagerModel.removeArtboard(id);
    setartboardList(getArtboards());
  };

  useEffect(() => {
    addArtboard(3);
    addArtboard(5);
    addArtboard(13);
    removeArtboard(13);
  }, []);

  /**
   * Event Handler to set one of the artboard to current Artboard
   * setCurrentArtboard(currentArtboard);
   *
   */
  return (
    <>
      <div id="artboard-manager-wrapper">
        {artboardList.map((board) => (
          <Artboard board={board} />
        ))}
        {/* {currentArtboard && <Artboard board={currentArtboard} />}; */}
      </div>
    </>
  );
}
