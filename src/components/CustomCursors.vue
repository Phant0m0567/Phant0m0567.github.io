<template>
  <span aria-hidden="true" />
</template>

<style scoped>
:global(html),
:global(body) {
  cursor: url('/assets/cursors/32/pointer.cur'), auto;
}

:global(a),
:global(button),
:global([role='button']),
:global(input[type='button']),
:global(input[type='submit']),
:global(input[type='reset']),
:global(summary),
:global(select) {
  cursor: url('/assets/cursors/32/link.cur'), pointer;
}

:global(input[type='text']),
:global(input[type='email']),
:global(input[type='password']),
:global(textarea),
:global([contenteditable='true']) {
  cursor: url('/assets/cursors/32/handwriting.cur'), text;
}

:global(.cursor-help) {
  cursor: url('/assets/cursors/32/help.cur'), help;
}

:global([aria-busy='true']),
:global(.cursor-wait) {
  cursor: url('/assets/cursors/32/busy.ani'), wait;
}

:global(.cursor-progress) {
  cursor: url('/assets/cursors/32/working.ani'), progress;
}

:global([draggable='true']),
:global(.cursor-move) {
  cursor: url('/assets/cursors/32/move.cur'), move;
}

:global(.cursor-alias) {
  cursor: url('/assets/cursors/32/alternate.cur'), alias;
}

:global(.cursor-ew-resize) {
  cursor: url('/assets/cursors/32/horz.cur'), ew-resize;
}

:global(.cursor-ns-resize) {
  cursor: url('/assets/cursors/32/vert.cur'), ns-resize;
}

:global(.cursor-nwse-resize) {
  cursor: url('/assets/cursors/32/dgn1.cur'), nwse-resize;
}

:global(.cursor-nesw-resize) {
  cursor: url('/assets/cursors/32/dgn2.cur'), nesw-resize;
}
</style>