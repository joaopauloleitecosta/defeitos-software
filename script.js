// Lista de notas em memória
let notes = [];
let editIndex = null;

const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');
const notesList = document.getElementById('notes-list');
const cancelEditBtn = document.getElementById('cancel-edit');

function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, idx) => {
        const li = document.createElement('li');
        li.className = 'note-item';

        const span = document.createElement('span');
        span.className = 'note-text';
        span.textContent = note;

        const actions = document.createElement('div');
        actions.className = 'note-actions';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.className = 'edit';
        editBtn.onclick = () => startEdit(idx);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.className = 'delete';
        //deleteBtn.onclick = () => deleteNote(idx);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);
        notesList.appendChild(li);
    });
}

noteForm.onsubmit = function(e) {
    e.preventDefault();
    const text = noteInput.value.trim();
    if (!text) return;
    if (editIndex === null) {
        notes.push(text);
    } else {
        notes[editIndex] = text;
        editIndex = null;
        noteForm.querySelector('button[type="submit"]').textContent = 'Adicionar Nota';
        cancelEditBtn.style.display = 'none';
    }
    noteInput.value = '';
    renderNotes();
};

function startEdit(idx) {
    noteInput.value = notes[idx];
    editIndex = idx;
    noteForm.querySelector('button[type="submit"]').textContent = 'Salvar Alteração';
    cancelEditBtn.style.display = 'inline-block';
}

function deleteNote(idx) {
    notes.splice(idx, 1);
    if (editIndex === idx) {
        editIndex = null;
        noteInput.value = '';
        noteForm.querySelector('button[type="submit"]').textContent = 'Adicionar Nota';
        cancelEditBtn.style.display = 'none';
    }
    renderNotes();
}

cancelEditBtn.onclick = function() {
    editIndex = null;
    noteInput.value = '';
    noteForm.querySelector('button[type="submit"]').textContent = 'Adicionar Nota';
    cancelEditBtn.style.display = 'none';
};

renderNotes();
