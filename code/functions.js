const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size;
sayings.get("dog");
sayings.get("fox");
sayings.has("bird");
sayings.has("dog");

for (const [key, value] of sayings) {
    console.log(`${key} goes ${value}`);
}

sayings.clear();
sayings.size;