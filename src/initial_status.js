export default {
  pieces: {
    tower: {
      positions: [
        { x: 0, y: 0, image: "WT1", image_mirrored: "BT1" },
        { x: 7, y: 0, image: "WT2", image_mirrored: "BT2" },
      ],
      mirrored: true,
      owner: 0,
    },
    horse: {
      positions: [
        { x: 1, y: 0, image: "WH1", image_mirrored: "BH1" },
        { x: 6, y: 0, image: "WH2", image_mirrored: "BH2" },
      ],
      mirrored: true,
      owner: 0,
    },
    bishop: {
      positions: [
        { x: 2, y: 0, image: "WB1", image_mirrored: "BB1" },
        { x: 5, y: 0, image: "WB2", image_mirrored: "BB2" },
      ],
      mirrored: true,
      owner: 0,
    },
    queen: {
      positions: [
        { x: 3, y: 0, image: "WQ1", image_mirrored: "BQ1" },
      ],
      mirrored: true,
      owner: 0,
    },
    king: {
      positions: [
        { x: 4, y: 0, image: "WK1", image_mirrored: "BK1" },
      ],
      mirrored: true,
      owner: 0,
    },
    pawn: {
      positions: [
        { x: 0, y: 1, image: "WP1", image_mirrored: "BP1" },
        { x: 1, y: 1, image: "WP2", image_mirrored: "BP2" },
        { x: 2, y: 1, image: "WP3", image_mirrored: "BP3" },
        { x: 3, y: 1, image: "WP4", image_mirrored: "BP4" },
        { x: 4, y: 1, image: "WP5", image_mirrored: "BP5" },
        { x: 5, y: 1, image: "WP6", image_mirrored: "BP6" },
        { x: 6, y: 1, image: "WP7", image_mirrored: "BP7" },
        { x: 7, y: 1, image: "WP8", image_mirrored: "BP8" },
      ],
      mirrored: true,
      owner: 0,
    },
  }
}