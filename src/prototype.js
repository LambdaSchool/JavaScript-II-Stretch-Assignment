/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:
  GameObject
   createdAt
    dimensions
    destroy() prototype method -> returns the string 'Game object was removed from the game.'
    */
    class GameObject {
      constructor(gameAttrs) {
      this.createdAt = gameAttrs.createdAt;
      this.dimensions = gameAttrs.dimensions;
    }
    destroy() {
      console.log('Game object was removed from the game.');
    };
  }

    /*
  NPC
    hp
    name
    takeDamage()  prototype method -> returns the string '<object name> took damage.'
     should inherit destroy() from GameObject's prototype
    */
    class NPC extends GameObject {
      constructor(npcAttrs) {
      super(npcAttrs);
      this.hp = npcAttrs.hp;
      this.name = npcAttrs.name;
    }
    takeDamage () {
      console.log(`${this.name} took damage.`);
    };
  }
  /*
  Humanoid
    faction
    weapons
    language
      greet()  prototype method -> returns the string '<object name> offers a greeting in <object language>.'
      should inherit destroy() from GameObject through NPC
      should inherit takeDamage() from NPC
      */
    class Humanoid extends NPC {
      constructor(humAttrs) {
      super(humAttrs);
      this.faction = humAttrs.faction;
      this.name = humAttrs.name;
      this.weapons = humAttrs.weapons;
      this.language = humAttrs.language;
    }
    greet() {
      console.log(`${this.name} offers a greeting in ${this.language}.`);
    };
  }
    


/*
  Inheritance chain: Humanoid -> NPC -> GameObject
  Instances of Humanoid should have all of the same properties as NPC and GameObject.
  Instances of NPC should have all of the same properties as GameObject.

  Example:

  const hamsterHuey = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Hamster Huey',
    faction: 'Gooey Kablooie',
    weapons: [
      'bubblegum',
    ],
    language: 'Hamsterish',
  });

  hamsterHuey.greet(); // returns 'Hamster Huey offers a greeting in Hamsterish'
  hamsterHuey.takeDamage(); // returns 'Hamster Huey took damage.'
  hamsterHuey.destroy(); // returns 'Game object was removed from the game.'
*/

    const javanoid = new Humanoid ({
      createdAt: '2/23/18',
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      hp: 100,
      name: 'Javanoid',
      faction: 'light',
      weapons: [
        'laser eyes',
      ],
      language: 'French',
    });
    javanoid.greet();
    javanoid.takeDamage();
    javanoid.destroy();

/* eslint-disable no-undef */

    module.exports = {
      GameObject,
      NPC,
      Humanoid,
    };
