ServerEvents.recipes((event) => {
  event.custom({
    type: "ars_additions:locate_structure",
    augments: [
      {
        key: "minecraft:sand",
      },
    ],
    id: "ars_additions:desert",
    structure: {
      key: "minecraft:desert",
    },
  });
});
