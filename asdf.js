<div class="container-fluid">
<div class="row">
<div class="col-xs-8">
<h2 class="text-primary text-center">CatPhotoApp</h2>
</div>
<div class="col-xs-4">
<a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat"></a>
</div>
</div>
<img src="http://bit.ly/fcc-running-cats" class="img-responsive">
<div class="row">
<div class="col-xs-4">
<button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
</div>
<div class="col-xs-4">
<button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
</div>
<div class="col-xs-4">
<button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
</div>
</div>
<p>Things cats <span class="text-danger">love:</span></p>
<ul>
<li>cat nip</li>
<li>laser pointers</li>
<li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
<li>flea treatment</li>
<li>thunder</li>
<li>other cats</li>
</ol>
<form action="/submit-cat-photo">
<div class="row">
<div class="col-xs-6">
<label><input type="radio" name="indoor-outdoor"> Indoor</label>
</div>
<div class="col-xs-6">
<label><input type="radio" name="indoor-outdoor"> Outdoor</label>
</div>
</div>
<div class="row">
<div class="col-xs-4">
<label><input type="checkbox" name="personality"> Loving</label> </div>
<div class="col-xs-4">
<label><input type="checkbox" name="personality"> Lazy</label> </div>
<div class="col-xs-4">
<label><input type="checkbox" name="personality"> Crazy</label> </div>
</div>
<div class="col-xs-4">
<input type="text" placeholder="cat photo URL" required>
<button type="submit">Submit</button>
</div>
</form>