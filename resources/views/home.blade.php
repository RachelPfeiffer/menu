@extends('layouts.app')

@section('content')
<div class="container">
    <div id="root" data-name={{ config('app.name', 'Laravel') }}></div>
</div>
@endsection