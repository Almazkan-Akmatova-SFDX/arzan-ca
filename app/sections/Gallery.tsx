import { Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const Gallery = () => {
  // You would replace these with the actual URLs of your images.
  const images = [
    "/gallery/food-1.webp",
    "/gallery/food-6.webp",
    "/gallery/food-3.webp",
    "/gallery/food-4.webp",
    "/gallery/food-5.webp",
    "/gallery/food-6.webp",
    "/gallery/food-7.webp",
    "/gallery/food-8.webp",
    "/gallery/food-9.webp",
    "/gallery/food-10.webp",
  ];

  return (
    <SimpleGrid
      columns={{ base: 2, lg: 5 }}
      gap="5px"
      height={{ base: "700px", md: "900px", lg: "600px" }}
    >
      {images.map((src, index) => (
        <Box
          width="100%"
          height="100%"
          overflow="clip"
          key={index}
          position="relative"
        >
          <Image
            fill
            src={src}
            alt={`Gallery image ${index + 1}`}
            style={{ objectFit: "cover" }}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};
export default Gallery;
