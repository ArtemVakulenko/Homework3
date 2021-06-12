CREATE TABLE "books" (
	"id"	INTEGER NOT NULL,
	"title"	VARCHAR(255) NOT NULL,
	"date"	VARCHAR(255) NOT NULL,
	"author"	VARCHAR(255) NOT NULL,
	"description"	VARCHAR(255) NOT NULL,
	"image"	VARCHAR(255) NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);

INSERT INTO books (title, date, author, description, image) VALUES ("Twenty Thousand Leagues Under the Seas", "1872", "Jules Verne", "Twenty Thousand Leagues Under the Sea tells the story of marine biologist Pierre Aronnax, his manservant Conseil and harpoonist Ned Land, who – after joining the hunt for a mysterious sea monster – are thrown overboard when the monster attacks and find themselves prisoners of Captain Nemo, probably one of Verne’s most memorable yet elusive characters.", "https://m.media-amazon.com/images/I/51evwEA4ZrL._SL500_.jpg")