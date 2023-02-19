const { LinkList, Node } = require("./link-list.js");


describe('LinkList', () => {
    test("push", () => {
        const list = new LinkList(new Node(1))
        expect(list.length).toBe(1)

        list.push(new Node(2))
        expect(list.length).toBe(2)
        expect(list.tail.value).toBe(2)

        list.push(new Node(3));
        expect(list.length).toBe(3);
        expect(list.tail.value).toBe(3);
    })
    test('iteration method should call the given function for each node', () => {
        const list = new LinkList(new Node(1));
        list.push(new Node(2));
        list.push(new Node(3));
        const values = []
        list.iteration(node => {
            values.push(node.value)
        });
        expect(values).toEqual([1, 2, 3])
    })
    test('len method should return the length of the list', () => {
        const list = new LinkList(new Node(1));
        list.push(new Node(2));
        list.push(new Node(3));

        expect(list.len()).toBe(3);
    });

    test('recursive method should call the given function for each node recursively', () => {
        const list = new LinkList(new Node(1));
        list.push(new Node(2));
        list.push(new Node(3));

        const values = [];
        list.recursive((node, i) => {
            values.push(node.value + i);
        });

        expect(values).toEqual([1, 3, 5]);
    });

    test('display method should log the values of the nodes', () => {
        const list = new LinkList(new Node(1));
        list.push(new Node(2));
        list.push(new Node(3));

        const consoleSpy = jest.spyOn(console, 'log');
        list.display();
        expect(consoleSpy).toHaveBeenCalledWith(1);
        expect(consoleSpy).toHaveBeenCalledWith(2);
        expect(consoleSpy).toHaveBeenCalledWith(3);
    });
    test('reverse', () => {
        const Llist = new LinkList(new Node("clothes"))
        Llist.push(new Node("king"))
        Llist.push(new Node("don"))
        Llist.reverse()

        expect(Llist.head.value).toBe("don")
        expect(Llist.tail.value).toBe("clothes")

        expect(Llist.head.next.value).toBe("king")
        expect(Llist.head.next.next.value).toBe("clothes")


    })
    test('reverse recursive', () => {
        const Llist = new LinkList(new Node("clothes"))
        Llist.push(new Node("king"))
        Llist.push(new Node("don"))
        Llist.reverseRec()

        expect(Llist.head.value).toBe("don")
        expect(Llist.tail.value).toBe("clothes")

        expect(Llist.head.next.value).toBe("king")
        expect(Llist.head.next.next.value).toBe("clothes")


    })
    test("shift", () => {
        const Llist = new LinkList(new Node("clothes"))
        Llist.push(new Node("king"))
        Llist.push(new Node("don"))
        Llist.shift()

        expect(Llist.head.value).toBe("king")
    })
    test("pop", () => {
        const Llist = new LinkList(new Node("clothes"))
        Llist.push(new Node("king"))
        Llist.push(new Node("don"))
        Llist.pop()
        expect(Llist.tail.value).toBe("king")
    })
    test("middle delete", () => {
        const Llist = new LinkList(new Node("clothes"))
        Llist.push(new Node("king"))
        Llist.push(new Node("don"))
        expect(Llist.len()).toBe(3)
        Llist.delMiddle()

        expect(Llist.head.value).toBe("clothes")
        expect(Llist.head.next.value).toBe("don")
        expect(Llist.tail.value).toBe("don")
        Llist.display()

        expect(Llist.len()).toBe(2)

        const Llist2 = new LinkList(new Node("clothes"))
        Llist2.push(new Node("king"))
        Llist2.delMiddle()

        expect(Llist2.head.next).toBe(null)

        const Llist3 = new LinkList(new Node("clothes"))
        Llist3.delMiddle()

        expect(Llist3.head).toBe(null)

    })
    test("index delete", () => {
        const Llist = new LinkList(new Node("clothes"))
        Llist.push(new Node("king"))
        Llist.push(new Node("don"))
        expect(Llist.len()).toBe(3)
        Llist.delete(1)

        expect(Llist.head.value).toBe("clothes")
        expect(Llist.head.next.value).toBe("don")
        expect(Llist.tail.value).toBe("don")
        Llist.display()

        expect(Llist.len()).toBe(2)

        const Llist2 = new LinkList(new Node("clothes"))
        Llist2.push(new Node("king"))
        Llist2.delete(1)

        expect(Llist2.head.next).toBe(null)

        const Llist3 = new LinkList(new Node("clothes"))
        Llist3.delete(0)

        expect(Llist3.head).toBe(null)

    })
    test("get Nth node", () => {
        const Llist = new LinkList(new Node("clothes"))
        Llist.push(new Node("king"))
        Llist.push(new Node("don"))

        expect(Llist.getNthNode(0).value).toBe("clothes")
        expect(Llist.getNthNode(1).value).toBe("king")
        expect(Llist.getNthNode(2).value).toBe("don")
    })
})
