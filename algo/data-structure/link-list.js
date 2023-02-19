const { log } = require("../../index.js")

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
    addNext(node) {
        this.next = node
    }
}

class LinkList {
    constructor(node) {
        this.head = node
        this.tail = node
        this.length = 1
    }
    push(node) {
        this.tail.addNext(node)
        this.tail = node
        this.length++;
    }
    iteration(func) {
        let current = this.head
        let index = 0;
        while (current != null) {
            func(current, index)
            current = current.next
            index++
        }
    }
    reverse() {
        let current = this.head
        this.tail = this.head
        let next = current.next;
        let prev = null;
        while (next) {
            next = current.next
            if (current == this.head) {
                current.next = null
            } else {
                current.next = prev
            }
            if (next === null) {
                this.head = current
            }
            prev = current
            current = next
        }
    }
    reverseRec(current = this.head, prev = null) {
        if (current.next === null) {
            this.head = current
            current.next = prev
            return
        }
        if (current == this.head) {
            this.tail = current
            this.reverseRec(current.next, current)
            current.next = prev
        } else {
            this.reverseRec(current.next, current)
            current.next = prev
        }
    }

    len() {
        let index = 0;
        this.iteration((_c, i) => {
            log("d" + i)
            index++
        })
        return index
    }
    recursive(func, node = this.head, i = 0) {
        func(node, i)
        i++;
        if (node.next) {
            this.recursive(func, node.next, i)
        }
    }
    display() {
        this.iteration(current => {
            log(current.value)
        })
    }
    shift() {
        this.head = this.head.next
        this.length--;
    }
    pop() {
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        }
        this.recursive((node) => {
            if (node.next == this.tail) {
                this.tail = node
                node.next = null
            }
        })
        this.length--;
    }
    delMiddle() {
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else if (this.head.next === this.tail) {
            this.head.next = null
            this.tail = this.head
        } else {
            let middle = parseInt((this.length + 1) / 2)

            this.iteration((node, i) => {
                if (i + 2 == middle) {
                    node.next = node.next.next
                }
            })
        }
        this.length--;
    }
    delete(index) {
        if (index === 0) {
            this.head = null
            this.tail = null
        }
        this.iteration((node, i) => {
            if (i + 1 == index) {
                if (node.next && node.next.next) {
                    node.next = node.next.next
                } else {
                    node.next = null
                }
            }
        })
    }
    getNthNode(index) {
        let value = null
        this.recursive((node, i) => {
            if (i === index) {
                value = node
            }
        })
        return value
    }
}

module.exports = { Node, LinkList }