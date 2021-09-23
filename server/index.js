const Hapi = require("@hapi/hapi");
const Joi = require("@hapi/joi");
const Mongoose = require("mongoose");

Mongoose.connect(
  "mongodb+srv://bikeApp:<password>@cluster0.esdwd.mongodb.net/sample_training?retryWrites=true&w=majority"
);

const bikesSchema = new Mongoose.Schema({
  id: String,
  name: String,
  images: [String],
  parts: [
    {
      id: Number,
    },
  ],
});

const partSchema = new Mongoose.Schema({
  id: String,
  name: String,
  description: String,
  images: [{ path: String }],
  compatibleBikes: [
    {
      id: Number,
      name: String,
    },
  ],
});

const Bike = Mongoose.model("bicycles", bikesSchema);
const Part = Mongoose.model("part", partSchema);

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: true
    }
  });

  await server.register({
    plugin: require("hapi-mongodb"),
    options: {
      url: "mongodb+srv://bikeApp:bikeApp@cluster0.esdwd.mongodb.net/sample_training?retryWrites=true&w=majority",
      settings: {
        useUnifiedTopology: true,
      },
      decorate: true,
    },
  });

  // Get all parts
  server.route({
    method: "GET",
    path: "/parts",
    handler: async (req, h) => {
      const parts = await Part.find();
      return parts;
    },
  });

  // Get all bicycles
  server.route({
    method: "GET",
    path: "/bicycles",
    handler: async (req, h) => {
      const bicycles = await Bike.find();
      return bicycles;
    },
  });

  // Update the details of a bicycle
  server.route({
    method: "PUT",
    path: "/bicycles/{id}",
    options: {
      validate: {
        params: Joi.object({
          id: Joi.number().integer(),
        }),
      },
    },
    handler: async (req, h) => {
      const id = req.params.id;
      const payload = req.payload;
      const doc = await Bike.findOneAndUpdate(
        {id: id}, {parts: payload.parts}
      )
      return doc;
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init();
