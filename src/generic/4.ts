/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Comp{
  title: string;
}

class Component <T extends Comp> {
  constructor (public props:T) {

  }
}

class Page extends Component<{title:string}> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};