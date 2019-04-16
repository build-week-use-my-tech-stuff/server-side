exports.seed = function(knex, Promise) {
  return knex("tech").insert([
    {
      name: "Apple iPad 9.7inches",
      user_id: 1,
      description:
        "Apple iPad 4th Gen A1459 White 16GB Wi-Fi + Cellular (AT&T) 9.7.MD519LL/A Tested and working condition. Comes with power cord and adapter.",
      picture: "https://i.ebayimg.com/images/g/jKkAAOSwjedctSo3/s-l1600.jpg",
      cost: "20",
      availability: true,
      info:
        "Coming from a NON-Smoker home! It will be iCloud unlocked and ready to sign in with no passwords."
    }, // 1
    {
      name: "Polaroid iX6038 Digital Camera",
      user_id: 2,
      description:
        "With a 20-megapixel CMOS sensor, pop-up flash, ISO speeds of up to 3200, face auto exposure and blink detection, you'll be sure to capture great still images that you can save and print.",
      picture: "https://i.ebayimg.com/images/g/tGcAAOSwcchcmRDU/s-l1600.jpg",
      cost: "35",
      availability: true,
      info:
        "Additional features include: an SD card slot that allows you to expand your picture and video storage; a 3-inch LCD display, for simple menu navigating and previewing images/video with ease; and a built-in HDMI output lets you view your content right on your HDTV."
    }, // 2
    {
      name: "TI-83 Plus Scientific Graphing Calculator",
      user_id: 1,
      description:
        "TI-83 Plus Scientific Graphing Calculator w Cover Texas Instruments Tested. Calculator is missing the battery cover but works fine. Shipped with USPS First Class Package.",
      picture: "https://i.ebayimg.com/images/g/B5EAAOSweqNctTUR/s-l1600.jpg",
      cost: "10",
      availability: true,
      info:
        "Item location: Keller, Texas, United States. Shipping to: United States"
    } // 3
  ]);
};
