const Review = require ('./database.js');
const Faker = require ('faker');


const dbObject = {};

for (let i = 0; i < 100; i++) {
  const reviewCount = Math.floor(50 * Math.random());
  for (j = 0; j < reviewCount; j++) {
    const reviewObject = {};
    reviewObject.bookId = i;
    const reviewerId = Math.floor(100 * Math.random());
    reviewObject.reviewerId = reviewerId;
    const name = Faker.name.findName();
    const imageUrl = Faker.image.animals();
    if (dbObject[reviewerId] === undefined) {
      reviewObject.reviewerName = name;
      dbObject[reviewerId] = name;
    } else {
      reviewObject.name = dbObject[reviewerId];
    }
    const urlString = 'imageUrl' + reviewerId.toString();
    if (dbObject[urlString] === undefined) {
      dbObject[urlString] = imageUrl;
      reviewObject.urlString = imageUrl;
    } else {
      reviewObject.urlString = dbObject[urlString];
    }
    const overallStars = Math.floor(Math.random() * 5) + 1;
    const storyStars = Math.floor(Math.random() * 5) + 1;
    const performanceStars = Math.floor(Math.random() * 5) + 1;

    reviewObject.overallStars = overallStars;
    reviewObject.storyStars = storyStars;
    reviewObject.performanceStars = performanceStars;
    console.log(reviewObject)
  }
}



