class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtEnd(value) {
        const newNode = {
            value: value,
            next: null
        }

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode
        }
    }
    insertAtTheBeginning(value) {
        const newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode
        if (!this.tail) {
            this.tail = newNode
        }
    }
    insertAfter(value, newVal) {
        const existingNode = this.find(value)
        if (!this.head) {
            return null
        }
        if (existingNode) {
            const newNode = {
                value: newVal,
                next: existingNode.next
            }
            existingNode.next = newNode
        }
    }
    listToArray() {
        const arrayList = []
        let currentNode = this.head
        while (currentNode) {
            arrayList.push(currentNode)
            currentNode = currentNode.next;
        }
        return arrayList;
    }

    pop() {
        this.head = this.head.next
    }
    push(value) {
        this.insertAtTheBeginning(value)
    }
    enqueue(value) {
        this.insertAtTheBeginning(value)
    }
    dequeue() {
        if (!this.head) {
            return null
        }
        if (this.tail) {
            let currentNode = this.head

            while (currentNode) {
                if (currentNode.next.next === null) {
                    currentNode.next = null
                }
                currentNode = currentNode.next
            }
        }
    }
    peek() {
        return this.head.value
    }
    deleteValue(value) {
        if (!this.head) {
            return null
        }
        //why while and not if cuz the first and the second nodes can have the value that has to
        // be deleted
        while (this.head && this.head.value === value) {
            this.pop()
        }
        let currentNode = this.head

        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next
            } else {
                currentNode = currentNode.next
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode
        }
    }

    countDataOccurences() {
        let hash = new Map()
        let listarray = this.listToArray();
        for (let i = 0; i < listarray.length; i++) {
            if (hash.has(listarray[i].value)) {
                hash.set(listarray[i].value, hash.get(listarray[i].value) + 1)
            } else {
                hash.set(listarray[i].value, 1)
            }
        }
        return hash
    }
    find(value) {
        if (!this.head) {
            return null
        }
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }
}

const ll = new LinkedList()
ll.insertAtTheBeginning('10')
ll.insertAtTheBeginning('10')
ll.insertAtTheBeginning('9')
ll.insertAtTheBeginning('8')
ll.insertAtTheBeginning('8')
ll.insertAtEnd('11')
ll.insertAtEnd('11')
ll.insertAtEnd('12')
ll.insertAtEnd('13')
ll.insertAtEnd('14')
ll.insertAtEnd('15')
ll.push('7')
ll.insertAfter('14', '14.5')
ll.insertAfter('15', '16')
ll.insertAfter('15', '16')
console.log(ll.listToArray())

ll.dequeue()
console.log(ll.listToArray())
console.log(ll.find('15'))
console.log(ll.countDataOccurences())