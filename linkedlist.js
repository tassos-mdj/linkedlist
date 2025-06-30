class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value, null);
        } else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = new Node(value,null);
        }
    }

    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value, null);
        } else {
            let newnode = new Node(value, this.head);
            this.head = newnode;
        }
    }

    size() {
        let s = 0;

        if (this.head === null) {
            return s;
        }

        let curr = this.head;
        s++;

        while (curr.next !== null) {
            curr = curr.next;
            s++;
        }

        return s;
    }

    head() {
        return this.head;
    }

    tail() {
        if (this.head === null) {
            return;
        }

        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }

        return curr;
    }

    at(index) {
        let currentIndex = 0;

        if (this.head === null) {
            return;
        }

        if (index === 0) {return this.head};
        
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
            currentIndex++;

            if (currentIndex === index) {
                return curr;
            }
        }

        console.log('Not Found');
        return;
    }

    
}

class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }

    
}