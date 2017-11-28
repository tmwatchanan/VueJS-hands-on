<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Data: {{ $route.query.q }}</p>

        <!-- adding a section with the height of 700px -->
        <div style="height: 700px"></div>
        <hr>
        <p id="data">Some extra paragraph with id="data"</p>
        <hr>
    </div>
</template>