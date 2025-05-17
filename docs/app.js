const modules = [
  {
    id: 1,
    title: 'Hello World & printing',
    explanation: `
      <p>
        Python programs start with simple statements. The <code>print()</code> function sends text or values to the console. Every Python file you run can contain multiple <code>print()</code> calls to show data or messages. This is usually the first thing beginners learn: writing a short program that prints “Hello, world!” to confirm the environment works. You can include plain text in quotes or combine text with variables by using commas or f-strings (with an <code>f</code> prefix). When you run the code, the interpreter executes each line in sequence and displays output. This module covers how to write and run basic <code>print()</code> statements, how to use quotes for strings, and how to run your first Python script in a browser with Skulpt.
        <br><sub>Find this <a href="https://github.com/andyj/learn_python_offline_pwa" target="_blank">Github</a></sub>
        </p>

    `,
    codeExamples: [
      `print("Hello, world!")`,
      `name = input("Enter your name: ")\nprint(f"Hello, {name}!")`,
      `for i in range(3):\n  print("Repeat", i)`
    ],
    quiz: {
      type: 'mcq',
      question: 'What function prints output to the console?',
      options: ['input()', 'print()', 'len()', 'str()'],
      answer: 1
    }
  },
  {
    id: 2,
    title: 'Variables & types',
    explanation: `<p>Variables store data values under a name you choose. Python is dynamically typed, so you don’t declare a type—you assign a value directly. Common types include integers (<code>int</code>), floating-point numbers (<code>float</code>), strings (<code>str</code>), and booleans (<code>bool</code>). You create a variable by picking a valid name (letters, numbers, underscores, not starting with a digit) and using the assignment operator (<code>=</code>). For example: <code>count = 5</code> or <code>greeting = "Hi"</code>. You can check a variable’s type using <code>type()</code>. In this module, you’ll learn how to assign values, reassign them, and inspect their types at runtime.</p>`,
    codeExamples: [
      `age = 30\nprint(type(age))`,
      `price = 9.99\nprint(type(price))`,
      `is_active = True\nprint(type(is_active))`
    ],
    quiz: {
      type: 'fill',
      question: `What type is the value True in Python?`,
      answer: `bool`
    }
  },
  {
    id: 3,
    title: 'Arithmetic & assignment operators',
    explanation: `<p>Python supports standard arithmetic operators: addition (<code>+</code>), subtraction (<code>-</code>), multiplication (<code>*</code>), division (<code>/</code>), integer division (<code>//</code>), modulus (<code>%</code>), and exponentiation (<code>**</code>). You can combine operations using parentheses for precedence. Python also provides augmented assignment operators like <code>+=</code>, <code>-=</code>, <code>*=</code>, and so on, which update a variable in place. For example: <code>x += 2</code> is shorthand for <code>x = x + 2</code>. In this module, you’ll practise basic math expressions and see how assignment operators help write concise code.</p>`,
    codeExamples: [
      `print(5 + 3)`,
      `x = 2\nx **= 3\nprint(x)`,
      `print(10 // 3, 10 % 3)`
    ],
    quiz: {
      type: 'mcq',
      question: 'Which operator raises a number to a power?',
      options: ['+', '^', '**', '//'],
      answer: 2
    }
  },
  {
    id: 4,
    title: 'Conditionals',
    explanation: `<p>Conditionals let you run code only when certain conditions are met. Use <code>if</code>, <code>elif</code> (else if), and <code>else</code> blocks. Conditions are expressions that evaluate to <code>True</code> or <code>False</code>. Python uses indentation to define code blocks—each nested level must be indented the same amount. You can combine conditions with <code>and</code>, <code>or</code>, and <code>not</code>. For example: <code>if x &gt; 0:</code> runs when <code>x</code> is positive. This module shows you how to branch logic and handle multiple cases.</p>`,
    codeExamples: [
      `x = 5\nif x > 0:\n  print("Positive")\nelse:\n  print("Non-positive")`,
      `score = 75\nif score >= 90:\n  print("A")\nelif score >= 80:\n  print("B")\nelse:\n  print("C")`,
      `flag = True\nif not flag:\n  print("Flag is False")`
    ],
    quiz: {
      type: 'mcq',
      question: 'How do you write “else if” in Python?',
      options: ['elseif', 'else if', 'elif', 'elifne'],
      answer: 2
    }
  },
  {
    id: 5,
    title: 'Loops',
    explanation: `<p>Loops let you repeat code multiple times. Python has <code>for</code> and <code>while</code> loops. A <code>for</code> loop iterates over a sequence (like a list or range), while a <code>while</code> loop runs as long as its condition remains <code>True</code>. You can use <code>break</code> to exit a loop early or <code>continue</code> to skip to the next iteration. Proper loop control avoids infinite loops. In this module, you’ll practise both loop types and see when each is appropriate.</p>`,
    codeExamples: [
      `for i in range(5):\n  print(i)`,
      `count = 0\nwhile count < 3:\n  print("Loop", count)\n  count += 1`,
      `for char in "Python":\n  if char == "h":\n    continue\n  print(char)`
    ],
    quiz: {
      type: 'mcq',
      question: 'Which loop runs until its condition is false?',
      options: ['for', 'while', 'do', 'foreach'],
      answer: 1
    }
  },
  {
    id: 6,
    title: 'Functions',
    explanation: `<p>Functions group reusable code under a name. Define one with the <code>def</code> keyword, followed by parameters in parentheses and a colon. The body is indented. Use <code>return</code> to send back a result; by default, Python functions return <code>None</code>. You can add a docstring—a quoted string right after the <code>def</code> line—to describe what the function does. Functions help organise code, avoid repetition, and make testing easier. In this module, you’ll write simple functions with and without parameters, return values, and docstrings.</p>`,
    codeExamples: [
      `def greet(name):\n  return f"Hello, {name}!"\nprint(greet("Alice"))`,
      `def add(a, b):\n  """Return sum of a and b."""\n  return a + b\nprint(add(2, 3))`,
      `def say_hi():\n  print("Hi!")\nsay_hi()`
    ],
    quiz: {
      type: 'mcq',
      question: 'What keyword defines a function?',
      options: ['function', 'def', 'fun', 'define'],
      answer: 1
    }
  },
  {
    id: 7,
    title: 'Lists & tuples',
    explanation: `<p>Lists and tuples are ordered collections. Lists use square brackets <code>[]</code> and are mutable—you can add, remove, or change items. Tuples use parentheses <code>()</code> and are immutable—you cannot change them after creation. Both support indexing, slicing, and iteration. Common list methods include <code>append()</code>, <code>pop()</code>, and <code>sort()</code>. Tuples are useful for fixed groups of values, like coordinates. In this module, you’ll create, access, slice, and modify lists, and learn when to use tuples instead.</p>`,
    codeExamples: [
      `my_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)`,
      `my_tuple = (10, 20, 30)\nprint(my_tuple[1])`,
      `nums = [3, 1, 2]\nnums.sort()\nprint(nums)`
    ],
    quiz: {
      type: 'fill',
      question: `Fill in the blank: <code>my_list = [1,2,3]; print(type(my_list))</code> outputs &lt;class '____'&gt;`,
      answer: `list`
    }
  },
  {
    id: 8,
    title: 'Dictionaries & sets',
    explanation: `<p>Dictionaries store key–value pairs using curly braces <code>{}</code>. Keys must be immutable (strings, numbers, tuples), and values can be any type. Access values by key, add or remove entries with assignment or <code>del</code>. Sets store unique, unordered items in curly braces without key–value syntax. They support membership tests, unions, intersections, and differences. Use <code>.add()</code> to add and <code>.remove()</code> to remove items. In this module, you’ll practise creating and manipulating dictionaries and sets, and see how they differ from lists and tuples.</p>`,
    codeExamples: [
      `person = {"name": "Bob", "age": 25}\nprint(person["name"])`,
      `person["city"] = "London"\nprint(person)`,
      `s = {1, 2, 2, 3}\nprint(s)`
    ],
    quiz: {
      type: 'mcq',
      question: 'Which data type stores unique unordered items?',
      options: ['list', 'tuple', 'dict', 'set'],
      answer: 3
    }
  },
  {
    id: 9,
    title: 'Importing modules & packages',
    explanation: `<p>Python’s standard library and third-party code are organised into modules and packages. Use <code>import module_name</code> to bring in a full module, or <code>from module_name import name</code> to load specific functions or classes. You can alias imports with <code>as</code>. Packages are folders with an <code>__init__.py</code> file. This module shows you how to import built-in modules like <code>math</code>, use their functions, and understand where Python looks for modules (the <code>sys.path</code>). You’ll practise both import styles.</p>`,
    codeExamples: [
      `import math\nprint(math.sqrt(16))`,
      `from math import sin, pi\nprint(sin(pi/2))`,
      `import math as m\nprint(m.factorial(5))`
    ],
    quiz: {
      type: 'mcq',
      question: 'How do you import only sin from math?',
      options: ['import math.sin', 'from math import sin', 'import sin from math', 'math import sin'],
      answer: 1
    }
  },
  {
    id: 10,
    title: 'Error handling & basic classes',
    explanation: `<p>Errors occur during execution. Use <code>try</code> and <code>except</code> blocks to catch them and prevent crashes. You can add an <code>else</code> block to run code if no exception occurs, and <code>finally</code> to run code regardless. Classes let you define custom data types. Use <code>class ClassName:</code> and define an <code>__init__</code> method for initialization. Add methods that take <code>self</code> as the first parameter. This module covers catching exceptions, raising errors with <code>raise</code>, and writing simple classes with attributes and methods.</p>`,
    codeExamples: [
      `try:\n  x = 1/0\nexcept ZeroDivisionError:\n  print("Cannot divide by zero")`,
      `class Dog:\n  def __init__(self, name):\n    self.name = name\n  def bark(self):\n    print(self.name + " says woof!")\nmy_dog = Dog("Rex")\nmy_dog.bark()`,
      `try:\n  open("nofile.txt")\nexcept Exception as e:\n  print(e)\nelse:\n  print("File opened")`
    ],
    quiz: {
      type: 'mcq',
      question: 'Which block runs if no exception is raised?',
      options: ['finally', 'except', 'else', 'try'],
      answer: 2
    }
  }
];

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
}

function builtinRead(x) {
  if (!Sk.builtinFiles || !Sk.builtinFiles['files'][x]) {
    throw `File not found: '${x}'`;
  }
  return Sk.builtinFiles['files'][x];
}

function attachEventListeners(moduleId) {
  const main = document.getElementById('main-content');
  main.querySelectorAll('.run-code').forEach(btn => {
    btn.addEventListener('click', async () => {
      const idx = btn.dataset.index;
      const editor = main.querySelector(`.code-editor[data-index="${idx}"]`);
      const output = main.querySelector(`.output[data-index="${idx}"]`);
      output.textContent = '';
      Sk.configure({ output: txt => { output.textContent += txt; }, read: builtinRead });
      try {
        await Sk.misceval.asyncToPromise(() =>
          Sk.importMainWithBody('<stdin>', false, editor.value, true)
        );
      } catch (e) {
        output.textContent += e.toString();
      }
    });
  });

  const quizDiv = main.querySelector('.quiz');
  if (quizDiv) {
    quizDiv.querySelector('.submit-quiz').addEventListener('click', () => {
      let correct = false;
      const q = modules.find(m => m.id === moduleId).quiz;
      if (q.type === 'mcq') {
        const sel = quizDiv.querySelector('input[name="quiz-answer"]:checked');
        if (sel && parseInt(sel.value, 10) === q.answer) correct = true;
      } else if (q.type === 'fill') {
        const ans = quizDiv.querySelector('.quiz-answer').value.trim().toLowerCase();
        if (ans === q.answer.toLowerCase()) correct = true;
      }
      const feedback = quizDiv.querySelector('.quiz-feedback');
      if (correct) {
        feedback.textContent = 'Correct!';
        localStorage.setItem(`quiz-${moduleId}`, 'true');
      } else {
        feedback.textContent = 'Incorrect, try again.';
      }
    });
  }
}

function loadModule(id) {
  const mod = modules.find(m => m.id === id);
  const main = document.getElementById('main-content');
  let html = mod.explanation;

  mod.codeExamples.forEach((code, i) => {
    html +=
      `<div class="code-block">` +
      `<textarea class="code-editor" data-index="${i}">${code}</textarea>` +
      `<button class="run-code" data-index="${i}">Run</button>` +
      `<pre class="output" data-index="${i}"></pre>` +
      `</div>`;
  });

  const key = `quiz-${id}`;
  if (localStorage.getItem(key) === 'true') {
    html += `<p class="quiz-completed">Quiz completed ✅</p>`;
  } else {
    html += `<div class="quiz">` +
      `<p class="quiz-question">${mod.quiz.question}</p>`;
    if (mod.quiz.type === 'mcq') {
      html += `<div class="quiz-options">`;
      mod.quiz.options.forEach((opt, idx) => {
        html += `<label><input type="radio" name="quiz-answer" value="${idx}"> ${opt}</label><br>`;
      });
      html += `</div>`;
    } else {
      html += `<input type="text" class="quiz-answer" placeholder="Your answer">`;
    }
    html += `<button class="submit-quiz">Submit</button>` +
      `<p class="quiz-feedback"></p>` +
      `</div>`;
  }

  main.innerHTML = html;
  attachEventListeners(id);
}

function sideBar(){
  // simple hide/show
  const menuBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');

  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');

    // if you still want content to shift when menu is visible:
    if (sidebar.classList.contains('hidden')) {
      content.style.marginLeft = '0';
    } else {
      content.style.marginLeft = getComputedStyle(document.documentElement)
        .getPropertyValue('--sidebar-w');
    }
  });

}

document.addEventListener('DOMContentLoaded', () => {
  sideBar();
  registerServiceWorker();
  const list = document.getElementById('module-list');
  modules.forEach(m => {
    const li = document.createElement('li');
    li.textContent = `${String(m.id).padStart(2, '0')} ${m.title}`;
    li.dataset.id = m.id;
    li.addEventListener('click', () => loadModule(m.id));
    list.appendChild(li);
  });
  document.getElementById('menu-toggle')
    .addEventListener('click', () =>
      document.getElementById('sidebar').classList.toggle('open')
    );
  loadModule(1);
});

