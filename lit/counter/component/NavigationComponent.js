export class NavigationComponent {
    hostConnected() {
        const header = document.createElement('header');
        const list = document.createElement('ul');

        let element = [
            '0 нас', '0 вас', '0 спецназ'
        ];

        element.forEach(function (item) {
            const element = document.createElement('li');
            element.insertAdjacentElement('beforeend', item);

            list.append(element);
        });

        return header.appendChild(list);
    }
}