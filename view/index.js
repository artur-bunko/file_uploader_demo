export default () => {
	return (
		<div className="swf-file-uploader-drop-target">
			<div>
				<now-icon icon="upload-fill" size="lg"></now-icon>
				<div>
					<a className="swf-text-link">
						Drag and drop or browse to upload file
					</a>
				</div>

				<p className="swf-file-uploader-file-types">
					.doc, .docx, .xls, xlsx, .jpeg, .jpg, .png
				</p>
			</div>
		</div>
	);
};
