var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync'),
	cssnano		= require('gulp-cssnano'),
	rename		= require('gulp-rename'),
	imagemin	= require('gulp-imagemin'),
	pngquant	= require('imagemin-pngquant'),
	cache		= require('gulp-cache'),
	autoprefixer= require('gulp-autoprefixer'),
	del			= require('del');
	babel = require('gulp-babel');

gulp.task('sass', function() {
	return gulp.src('app/sass/*.sass')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascate: true }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function() {
	return gulp.src('app/css/main.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('libs', function() {
	return gulp.src('app/libs/**/*')
	.pipe(gulp.dest('dist/libs'));
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('clear', function() {
	return cache.clearAll();
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressice: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
	gulp.watch('app/sass/*.sass', gulp.parallel('sass'));
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/js/*.js').on('change', browserSync.reload);
});

gulp.task('build', function() {
	var buildCss = gulp.src([
		'app/css/main.min.css',
	])
		.pipe(gulp.dest('dist/css'));

	var buildLibs = gulp.src([
		'app/libs/**/*',
	])
		.pipe(gulp.dest('dist/libs'));

	var buildFonts = gulp.src(
		'app/fonts/**/*'
	)
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});


 
gulp.task('babel', () =>
    gulp.src('app/js/common.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'))
);

gulp.task('default', gulp.parallel('watch', 'img', 'sass', 'css', 'libs', 'babel', 'browser-sync'));
