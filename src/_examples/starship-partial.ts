/** The interface has two required properties */
interface StarShip {
  name: string;
  enableHyperDrive: boolean;
}

/** Bad */
const updateStarShipBad = (id: number, name: StarShip) => {};
// @ts-ignore
updateStarShipBad(0, { name: "Explorer" });

/** Good */
/** The utility function Partial can transform those required properties into optional. */
const updateStarShipGood = (id: number, name: Partial<StarShip>) => {};
updateStarShipGood(1, { name: "Millennium Falcon" });
