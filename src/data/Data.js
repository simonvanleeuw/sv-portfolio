/*-- Menu Data --*/

class MenuItemObj {
    constructor(value, id, path) {
        this.value = value;
        this.id = id;
        this.path = path;
    }
}

export const menuItems = [
    new MenuItemObj('Work', '1', '/work'), 
    new MenuItemObj('About', '2', '/about'), 
    new MenuItemObj('Contact', '3', '/contact')
]

/*-- Hero Data --*/

class HeroObj {
    constructor(title, subTitle, text) {
        this.title = title;
        this.subTitle = subTitle;
        this.text = text;
    }
}

export const heroHome = new HeroObj('People-empowering products, for better B2B.', 'enterprise UX Designer', 'Having worked for many clients and many diverse projects, Simon has the work-ethic and the experience to overcome many difficulties so his product’s users don’t have to.');

export const heroWork = [];

export const heroAbout = new HeroObj('Formless, yet informed.', 'About me', 'In a world that changes faster than the wind, I believe there’s more demand for people who don’t get stuck in fixed patterns. People who keep up with circumstances, changing needs and changing markets. People who, as Bruce Lee called it, stay ‘formless like water’. And I am formless enough to be innovative, while still carrying the necessary information to deliver this innovation in a familiar format of tried-and-true best practices. Finding the new starts always with a familiar, yet constantly evolving process. So what does that process (currently) look like?')

/*-- Text Block Data --*/

class TextBlockObj {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
  }

  export const textBlockHome = [
    new TextBlockObj('UX Design', 'With his core expertise, Simon will translate your targets into a workable product prototype. One that can easily demonstrate the merit to shareholders and technical teams.'),
    new TextBlockObj('UI Design', 'A product is only complete when it doesn’t just work professionally and credible, but also looks that way. By adding stylistic touches, we create the right look- and feel for the experience, while keeping it consistent with the product brand.'),
    new TextBlockObj('UX Strategy', 'Besides delivering screens, Simon is well capable of doing, and communicating, the high level work. This ensures that less revisions are made in the prototype and code, making the process really cost-effective.')
  ]

  export const textBlockAbout = [
    new TextBlockObj('1. Asking (the right) questions', 'Before starting any work, I try to gain an as accurate view of the situation and our users, by as many channels as possible, by combining User Research methods along with learning the context of the business. '),
    new TextBlockObj('2. Creating the project outlines', 'Once the situation is known, we can create a definition of success for our product. What are the metrics of success for each? What are the problems and frustrations that must be solved, in what order? That’s how we create the endpoint towards which we must work.'),
    new TextBlockObj('3. Creating a tangible solution', 'We ask ourselves, will this idea satisfy both the users and the business, while still being technologically feasable? We can only find this out with a tangible prototype.' + 
                    'Depending on the nature of the solution, we can start with click-through-based prototypes or more advanced interactive prototypes. Once the experience feels right, we can amplify it with a relevant look and feel for the product and the brand.')
  ]

  export const textBlockWork = [
      
  ]